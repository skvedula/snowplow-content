-- deduplicate search.sql

DROP TABLE IF EXISTS duplicates.tmp_search;
DROP TABLE IF EXISTS duplicates.tmp_search_id;
DROP TABLE IF EXISTS duplicates.tmp_search_id_remaining;

-- (a) list all root_id that occur more than once in the target table

CREATE TABLE duplicates.tmp_search_id
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.search GROUP BY 1) WHERE count > 1);

-- (b) create a new table with these events and deduplicate as much as possible using GROUP BY

CREATE TABLE duplicates.tmp_search
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (

  SELECT

    root_id,
    MIN(root_tstamp) as root_tstamp,
    MIN(derived_tstamp) as derived_tstamp, -- keep the earliest event
    etl_tstamp_local,

       terms,
       filters,
       total_results,
       page_results

  FROM public.search
  WHERE root_id IN (SELECT root_id FROM duplicates.tmp_search_id)
  GROUP BY 1,4, 5,6,7,8

);

-- (c) delete the duplicates from the original table and insert the deduplicated rows

BEGIN;

  DELETE FROM public.search WHERE root_id IN (SELECT root_id FROM duplicates.tmp_search_id);
  INSERT INTO public.search (SELECT * FROM duplicates.tmp_search);

COMMIT;

-- (d) move remaining duplicates to another table (optional)

CREATE TABLE duplicates.tmp_search_id_remaining
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.search GROUP BY 1) WHERE count > 1);

BEGIN;

  INSERT INTO duplicates.search (SELECT * FROM public.search WHERE root_id IN (SELECT root_id FROM duplicates.tmp_search_id_remaining));
  DELETE FROM public.search WHERE root_id IN (SELECT root_id FROM duplicates.tmp_search_id_remaining);

COMMIT;

-- (e) drop tables

DROP TABLE IF EXISTS duplicates.tmp_search;
DROP TABLE IF EXISTS duplicates.tmp_search_id;
DROP TABLE IF EXISTS duplicates.tmp_search_id_remaining;
