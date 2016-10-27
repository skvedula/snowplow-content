-- deduplicate link-clicks.sql

DROP TABLE IF EXISTS duplicates.tmp_link_clicks;
DROP TABLE IF EXISTS duplicates.tmp_link_clicks_id;
DROP TABLE IF EXISTS duplicates.tmp_link_clicks_id_remaining;

-- (a) list all root_id that occur more than once in the target table

CREATE TABLE duplicates.tmp_link_clicks_id
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.link_clicks GROUP BY 1) WHERE count > 1);

-- (b) create a new table with these events and deduplicate as much as possible using GROUP BY

CREATE TABLE duplicates.tmp_link_clicks
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (

  SELECT

    root_id,
    MIN(root_tstamp) as root_tstamp,
    MIN(derived_tstamp) as derived_tstamp, -- keep the earliest event
    etl_tstamp_local,

       element_id,
       element_classes,
       element_target,
       target_url

  FROM public.link_clicks
  WHERE root_id IN (SELECT root_id FROM duplicates.tmp_link_clicks_id)
  GROUP BY 1,4, 5,6,7,8

);

-- (c) delete the duplicates from the original table and insert the deduplicated rows

BEGIN;

  DELETE FROM public.link_clicks WHERE root_id IN (SELECT root_id FROM duplicates.tmp_link_clicks_id);
  INSERT INTO public.link_clicks (SELECT * FROM duplicates.tmp_link_clicks);

COMMIT;

-- (d) move remaining duplicates to another table (optional)

CREATE TABLE duplicates.tmp_link_clicks_id_remaining
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.link_clicks GROUP BY 1) WHERE count > 1);

BEGIN;

  INSERT INTO duplicates.link_clicks (SELECT * FROM public.link_clicks WHERE root_id IN (SELECT root_id FROM duplicates.tmp_link_clicks_id_remaining));
  DELETE FROM public.link_clicks WHERE root_id IN (SELECT root_id FROM duplicates.tmp_link_clicks_id_remaining);

COMMIT;

-- (e) drop tables

DROP TABLE IF EXISTS duplicates.tmp_link_clicks;
DROP TABLE IF EXISTS duplicates.tmp_link_clicks_id;
DROP TABLE IF EXISTS duplicates.tmp_link_clicks_id_remaining;
