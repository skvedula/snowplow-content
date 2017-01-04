-- deduplicate public.page_views

DROP TABLE IF EXISTS duplicates.tmp_page_views_ids;

CREATE TABLE duplicates.tmp_page_views_ids  -- get all duplicate root_ids in public.page_views - owner??
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.page_views GROUP BY 1) WHERE count > 1);

DROP TABLE IF EXISTS duplicates.tmp_page_views;

CREATE TABLE duplicates.tmp_page_views       -- get full rows + duplicate number
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (
 SELECT T1.root_id, 
   root_tstamp,
   T1.derived_tstamp,
   T1.etl_tstamp_local,
       page_url,
       page_category,
       page_template,
       style_number,
       is_recognized,
       search_term,
       search_results_count,
       tag_id,
       experiment_id,
       experiment_data,
ROW_NUMBER() OVER (PARTITION BY T1.root_id ORDER BY T1.derived_tstamp) as event_number
 FROM public.page_views T1,
 duplicates.tmp_page_views_ids T2
 WHERE T1.root_id = T2.root_id
);

BEGIN;

 DELETE FROM public.page_views  -- delete all dupes from public.page_views
 WHERE root_id IN (SELECT root_id FROM duplicates.tmp_page_views_ids);

 INSERT INTO public.page_views (             -- write only first occurrence back to public.page_views
   SELECT root_id, 
   root_tstamp,
   derived_tstamp,
   etl_tstamp_local,
       page_url,
       page_category,
       page_template,
       style_number,
       is_recognized,
       search_term,
       search_results_count,
       tag_id,
       experiment_id,
       experiment_data
FROM duplicates.tmp_page_views WHERE event_number = 1
);

  INSERT INTO duplicates.page_views (  -- write remaining to duplicates.page_views
   SELECT root_id, 
   root_tstamp,
   derived_tstamp,
   etl_tstamp_local,
       page_url,
       page_category,
       page_template,
       style_number,
       is_recognized,
       search_term,
       search_results_count,
       tag_id,
       experiment_id,
       experiment_data
FROM duplicates.tmp_page_views WHERE event_number > 1
  );

COMMIT;