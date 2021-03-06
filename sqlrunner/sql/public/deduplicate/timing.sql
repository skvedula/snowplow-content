-- deduplicate public.timing

DROP TABLE IF EXISTS duplicates.tmp_timing_ids;

CREATE TABLE duplicates.tmp_timing_ids  -- get all duplicate root_ids in public.timing
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.timing GROUP BY 1) WHERE count > 1);

DROP TABLE IF EXISTS duplicates.tmp_timing;

CREATE TABLE duplicates.tmp_timing       -- get full rows + duplicate number
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (
 SELECT T1.root_id, 
   root_tstamp,
   T1.derived_tstamp,
   T1.etl_tstamp_local,
       category,
       variable,
       timing,
       label,
ROW_NUMBER() OVER (PARTITION BY T1.root_id ORDER BY T1.derived_tstamp) as event_number
 FROM public.timing T1,
 duplicates.tmp_timing_ids T2
 WHERE T1.root_id = T2.root_id
);

BEGIN;

 DELETE FROM public.timing  -- delete all dupes from public.timing
 WHERE root_id IN (SELECT root_id FROM duplicates.tmp_timing_ids);

 INSERT INTO public.timing (             -- write only first occurrence back to public.timing
   SELECT root_id, 
   root_tstamp,
   derived_tstamp,
   etl_tstamp_local,
       category,
       variable,
       timing,
       label
FROM duplicates.tmp_timing WHERE event_number = 1
);

  INSERT INTO duplicates.timing (  -- write remaining to duplicates.timing
   SELECT root_id, 
   root_tstamp,
   derived_tstamp,
   etl_tstamp_local,
       category,
       variable,
       timing,
       label
FROM duplicates.tmp_timing WHERE event_number > 1
  );

COMMIT;