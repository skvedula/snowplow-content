-- deduplicate product-views.sql

DROP TABLE IF EXISTS duplicates.tmp_product_views;
DROP TABLE IF EXISTS duplicates.tmp_product_views_id;
DROP TABLE IF EXISTS duplicates.tmp_product_views_id_remaining;

-- (a) list all root_id that occur more than once in the target table

CREATE TABLE duplicates.tmp_product_views_id
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.product_views GROUP BY 1) WHERE count > 1);

-- (b) create a new table with these events and deduplicate as much as possible using GROUP BY

CREATE TABLE duplicates.tmp_product_views
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (

  SELECT

    root_id,
    MIN(root_tstamp) as root_tstamp,
    MIN(derived_tstamp) as derived_tstamp, -- keep the earliest event
    
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

  FROM public.product_views
  WHERE root_id IN (SELECT root_id FROM duplicates.tmp_product_views_id)
  GROUP BY 1, 4,5,6,7,8,9,10,11,12,13,14

);

-- (c) delete the duplicates from the original table and insert the deduplicated rows

BEGIN;

  DELETE FROM public.product_views WHERE root_id IN (SELECT root_id FROM duplicates.tmp_product_views_id);
  INSERT INTO public.product_views (SELECT * FROM duplicates.tmp_product_views);

COMMIT;

-- (d) move remaining duplicates to another table (optional)

CREATE TABLE duplicates.tmp_product_views_id_remaining
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.product_views GROUP BY 1) WHERE count > 1);

BEGIN;

  INSERT INTO duplicates.product_views (SELECT * FROM public.product_views WHERE root_id IN (SELECT root_id FROM duplicates.tmp_product_views_id_remaining));
  DELETE FROM public.product_views WHERE root_id IN (SELECT root_id FROM duplicates.tmp_product_views_id_remaining);

COMMIT;

-- (e) drop tables

DROP TABLE IF EXISTS duplicates.tmp_product_views;
DROP TABLE IF EXISTS duplicates.tmp_product_views_id;
DROP TABLE IF EXISTS duplicates.tmp_product_views_id_remaining;
