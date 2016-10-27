-- deduplicate elwin-exposures.sql

DROP TABLE IF EXISTS duplicates.tmp_marketing;
DROP TABLE IF EXISTS duplicates.tmp_marketing_id;
DROP TABLE IF EXISTS duplicates.tmp_marketing_id_remaining;

-- (a) list all root_id that occur more than once in the target table

CREATE TABLE duplicates.tmp_marketing_id
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.marketing GROUP BY 1) WHERE count > 1);

-- (b) create a new table with these events and deduplicate as much as possible using GROUP BY

CREATE TABLE duplicates.tmp_marketing
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (

  SELECT

    root_id,
    MIN(root_tstamp) as root_tstamp,
    MIN(derived_tstamp) as derived_tstamp, -- keep the earliest event
    etl_tstamp_local,

       mkt_source,
       mkt_medium,
       mkt_campaign,
       mkt_term,
       mkt_content,
       mkt_cm_camp_name,
       mkt_cm_camp_uid,
       mkt_rkg_id,
       mkt_linkshare_siteid,
       mkt_cm_em

  FROM public.marketing
  WHERE root_id IN (SELECT root_id FROM duplicates.tmp_marketing_id)
  GROUP BY 1,4, 5,6,7,8,9,10,11,12,13,14

);

-- (c) delete the duplicates from the original table and insert the deduplicated rows

BEGIN;

  DELETE FROM public.marketing WHERE root_id IN (SELECT root_id FROM duplicates.tmp_marketing_id);
  INSERT INTO public.marketing (SELECT * FROM duplicates.tmp_marketing);

COMMIT;

-- (d) move remaining duplicates to another table (optional)

CREATE TABLE duplicates.tmp_marketing_id_remaining
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.marketing GROUP BY 1) WHERE count > 1);

BEGIN;

  INSERT INTO duplicates.marketing (SELECT * FROM public.marketing WHERE root_id IN (SELECT root_id FROM duplicates.tmp_marketing_id_remaining));
  DELETE FROM public.marketing WHERE root_id IN (SELECT root_id FROM duplicates.tmp_marketing_id_remaining);

COMMIT;

-- (e) drop tables

DROP TABLE IF EXISTS duplicates.tmp_marketing;
DROP TABLE IF EXISTS duplicates.tmp_marketing_id;
DROP TABLE IF EXISTS duplicates.tmp_marketing_id_remaining;
