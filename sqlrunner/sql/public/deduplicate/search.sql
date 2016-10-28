-- deduplicate public.search

DROP TABLE IF EXISTS duplicates.tmp_search_ids;

CREATE TABLE duplicates.tmp_search_ids  -- get all duplicate root_ids in public.search
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.search GROUP BY 1) WHERE count > 1);

DROP TABLE IF EXISTS duplicates.tmp_search;

CREATE TABLE duplicates.tmp_search       -- get full rows + duplicate number
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (
 SELECT T1.root_id, 
   root_tstamp,
   T1.derived_tstamp,
   T1.etl_tstamp_local,
       terms,
       filters,
       total_results,
       page_results,
ROW_NUMBER() OVER (PARTITION BY T1.root_id ORDER BY T1.derived_tstamp) as event_number
 FROM public.search T1,
 duplicates.tmp_search_ids T2
 WHERE T1.root_id = T2.root_id
);

BEGIN;

 DELETE FROM public.search  -- delete all dupes from public.search
 WHERE root_id IN (SELECT root_id FROM duplicates.tmp_search_ids);

 INSERT INTO public.search (             -- write only first occurrence back to public.search
   SELECT root_id, 
   root_tstamp,
   derived_tstamp,
   etl_tstamp_local,
       terms,
       filters,
       total_results,
       page_results
FROM duplicates.tmp_search WHERE event_number = 1
);

  INSERT INTO duplicates.search (  -- write remaining to duplicates.search
   SELECT root_id, 
   root_tstamp,
   derived_tstamp,
   etl_tstamp_local,
       terms,
       filters,
       total_results,
       page_results
FROM duplicates.tmp_search WHERE event_number > 1
  );

COMMIT;