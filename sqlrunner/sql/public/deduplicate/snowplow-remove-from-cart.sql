-- deduplicate public.snowplow_remove_from_cart

DROP TABLE IF EXISTS duplicates.tmp_snowplow_remove_from_cart_ids;

CREATE TABLE duplicates.tmp_snowplow_remove_from_cart_ids  -- get all duplicate root_ids in public.snowplow_remove_from_cart
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.snowplow_remove_from_cart GROUP BY 1) WHERE count > 1);

DROP TABLE IF EXISTS duplicates.tmp_snowplow_remove_from_cart;

CREATE TABLE duplicates.tmp_snowplow_remove_from_cart       -- get full rows + duplicate number
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (
 SELECT T1.root_id, 
   root_tstamp,
   T1.derived_tstamp,
   T1.etl_tstamp_local,
       sku,
       name,
       category,
       unit_price,
       quantity,
       currency,
ROW_NUMBER() OVER (PARTITION BY T1.root_id ORDER BY T1.derived_tstamp) as event_number
 FROM public.snowplow_remove_from_cart T1,
 duplicates.tmp_snowplow_remove_from_cart_ids T2
 WHERE T1.root_id = T2.root_id
);

BEGIN;

 DELETE FROM public.snowplow_remove_from_cart  -- delete all dupes from public.snowplow_remove_from_cart
 WHERE root_id IN (SELECT root_id FROM duplicates.tmp_snowplow_remove_from_cart_ids);

 INSERT INTO public.snowplow_remove_from_cart (             -- write only first occurrence back to public.snowplow_remove_from_cart
   SELECT root_id, 
   root_tstamp,
   derived_tstamp,
   etl_tstamp_local,
       sku,
       name,
       category,
       unit_price,
       quantity,
       currency
FROM duplicates.tmp_snowplow_remove_from_cart WHERE event_number = 1
);

  INSERT INTO duplicates.snowplow_remove_from_cart (  -- write remaining to duplicates.snowplow_remove_from_cart
   SELECT root_id, 
   root_tstamp,
   derived_tstamp,
   etl_tstamp_local,
       sku,
       name,
       category,
       unit_price,
       quantity,
       currency
FROM duplicates.tmp_snowplow_remove_from_cart WHERE event_number > 1
  );

COMMIT;