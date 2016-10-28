-- deduplicate public.product_views

DROP TABLE IF EXISTS duplicates.tmp_product_views_ids;

CREATE TABLE duplicates.tmp_product_views_ids  -- get all duplicate root_ids in public.product_views
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.product_views GROUP BY 1) WHERE count > 1);

DROP TABLE IF EXISTS duplicates.tmp_product_views;

CREATE TABLE duplicates.tmp_product_views       -- get full rows + duplicate number
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (
 SELECT T1.root_id, 
   root_tstamp,
   T1.derived_tstamp,
   T1.etl_tstamp_local,
       page_url,
       product_id,
       product_category,
       style_number,
       product_name,
       on_sale,
       brand_name,
       fit_value,
       rack,
       available,
       tag_id,
ROW_NUMBER() OVER (PARTITION BY root_id ORDER BY derived_tstamp) as event_number
 FROM public.product_views T1,
 duplicates.tmp_product_views_ids T2
 WHERE T1.root_id = T2.root_id
);

BEGIN;

 DELETE FROM public.product_views  -- delete all dupes from public.product_views
 WHERE root_id IN (SELECT root_id FROM duplicates.tmp_product_views_ids);

 INSERT INTO public.product_views (             -- write only first occurrence back to public.product_views
   SELECT root_id, 
   root_tstamp,
   derived_tstamp,
   etl_tstamp_local,
       page_url,
       product_id,
       product_category,
       style_number,
       product_name,
       on_sale,
       brand_name,
       fit_value,
       rack,
       available,
       tag_id
FROM duplicates.tmp_product_views WHERE event_number = 1
);

  INSERT INTO duplicates.product_views (  -- write remaining to duplicates.product_views
   SELECT root_id, 
   root_tstamp,
   derived_tstamp,
   etl_tstamp_local,
       page_url,
       product_id,
       product_category,
       style_number,
       product_name,
       on_sale,
       brand_name,
       fit_value,
       rack,
       available,
       tag_id
FROM duplicates.tmp_product_views WHERE event_number > 1
  );

COMMIT;