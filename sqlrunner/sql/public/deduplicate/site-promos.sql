-- deduplicate public.site_promos

DROP TABLE IF EXISTS duplicates.tmp_site_promos_ids;

CREATE TABLE duplicates.tmp_site_promos_ids  -- get all duplicate root_ids in public.site_promos
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.site_promos GROUP BY 1) WHERE count > 1);

DROP TABLE IF EXISTS duplicates.tmp_site_promos;

CREATE TABLE duplicates.tmp_site_promos       -- get full rows + duplicate number
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (
 SELECT T1.root_id, 
   root_tstamp,
   T1.derived_tstamp,
   T1.etl_tstamp_local,
       promotion_type,
       promotion,
       link,
ROW_NUMBER() OVER (PARTITION BY T1.root_id ORDER BY T1.derived_tstamp) as event_number
 FROM public.site_promos T1,
 duplicates.tmp_site_promos_ids T2
 WHERE T1.root_id = T2.root_id
);

BEGIN;

 DELETE FROM public.site_promos  -- delete all dupes from public.site_promos
 WHERE root_id IN (SELECT root_id FROM duplicates.tmp_site_promos_ids);

 INSERT INTO public.site_promos (             -- write only first occurrence back to public.site_promos
   SELECT root_id, 
   root_tstamp,
   derived_tstamp,
   etl_tstamp_local,
       promotion_type,
       promotion,
       link
 FROM duplicates.tmp_site_promos WHERE event_number = 1
);

  INSERT INTO duplicates.site_promos (  -- write remaining to duplicates.site_promos
   SELECT root_id, 
   root_tstamp,
   derived_tstamp,
   etl_tstamp_local,
       promotion_type,
       promotion,
       link
 FROM duplicates.tmp_site_promos WHERE event_number > 1
  );

COMMIT;