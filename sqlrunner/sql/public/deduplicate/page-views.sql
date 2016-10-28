-- deduplicate public.page_views

DROP TABLE IF EXISTS duplicates.tmp_page_views_ids;

CREATE TABLE duplicates.tmp_page_views_ids  -- get all duplicate root_ids in public.page_views
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.page_views GROUP BY 1) WHERE count > 1);

DROP TABLE IF EXISTS duplicates.tmp_page_views;

CREATE TABLE duplicates.tmp_page_views       -- get full rows + duplicate number
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (
 SELECT *, ROW_NUMBER() OVER (PARTITION BY root_id ORDER BY derived_tstamp) as event_number
 FROM public.page_views T1,
 duplicates.tmp_page_views_ids T2
 WHERE T1.root_id = T2.root_id
);

BEGIN;

 DELETE FROM public.page_views  -- delete all dupes from public.page_views
 WHERE root_id IN (SELECT root_id FROM duplicates.tmp_page_views_ids);

 INSERT INTO public.page_views (             -- write only first occurrence back to public.page_views
   SELECT * FROM duplicates.tmp_page_views WHERE event_number = 1
);

  INSERT INTO duplicates.page_views (  -- write remaining to duplicates.page_views
   SELECT * FROM duplicates.tmp_page_views WHERE event_number > 1
  );

COMMIT;