-- deduplicate public.real_estate

DROP TABLE IF EXISTS duplicates.tmp_real_estate_ids;

CREATE TABLE duplicates.tmp_real_estate_ids  -- get all duplicate root_ids in public.real_estate
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.real_estate GROUP BY 1) WHERE count > 1);

DROP TABLE IF EXISTS duplicates.tmp_real_estate;

CREATE TABLE duplicates.tmp_real_estate       -- get full rows + duplicate number
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (
 SELECT T1.root_id, 
   root_tstamp,
   T1.derived_tstamp,
   T1.etl_tstamp_local,
       version,
       page_area,
       link,
ROW_NUMBER() OVER (PARTITION BY T1.root_id ORDER BY T1.derived_tstamp) as event_number
 FROM public.real_estate T1,
 duplicates.tmp_real_estate_ids T2
 WHERE T1.root_id = T2.root_id
);

BEGIN;

 DELETE FROM public.real_estate  -- delete all dupes from public.real_estate
 WHERE root_id IN (SELECT root_id FROM duplicates.tmp_real_estate_ids);

 INSERT INTO public.real_estate (             -- write only first occurrence back to public.real_estate
   SELECT root_id, 
   root_tstamp,
   derived_tstamp,
   etl_tstamp_local,
       version,
       page_area,
       link
 FROM duplicates.tmp_real_estate WHERE event_number = 1
);

  INSERT INTO duplicates.real_estate (  -- write remaining to duplicates.real_estate
   SELECT root_id, 
   root_tstamp,
   derived_tstamp,
   etl_tstamp_local,
       version,
       page_area,
       link
 FROM duplicates.tmp_real_estate WHERE event_number > 1
  );

COMMIT;