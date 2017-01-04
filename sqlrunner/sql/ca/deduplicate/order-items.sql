-- deduplicate clk_strm_sp.order_items

DROP TABLE IF EXISTS clk_strm_sp.tmp_order_items_ids;

CREATE TABLE clk_strm_sp.tmp_order_items_ids  -- get all duplicate root_ids in clk_strm_sp.order_items
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM clk_strm_sp.order_items GROUP BY 1) WHERE count > 1);

DROP TABLE IF EXISTS clk_strm_sp.tmp_order_items;

CREATE TABLE clk_strm_sp.tmp_order_items       -- get full rows + duplicate number
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (
 SELECT T1.root_id, 
   root_tstamp,
   T1.derived_tstamp,
   T1.etl_tstamp_local,
       outfit_id,
       gift_services,
       saved_for_later,
       store_pickup,
       product_rating,
       number_reviews,
       recommendation_percent,
       on_sale,
       brand_name,
       filter_used,
       search_term,
       sort_used,
       base_copy_split,
       true_fit,
       same_day_delivery,
       size,
       width,
       color,
       is_recognized,
       tag_id,
       style_number,
       vendor_order_id,
ROW_NUMBER() OVER (PARTITION BY T1.root_id ORDER BY T1.derived_tstamp) as event_number
 FROM clk_strm_sp.order_items T1,
 clk_strm_sp.tmp_order_items_ids T2
 WHERE T1.root_id = T2.root_id
);

BEGIN;

 DELETE FROM clk_strm_sp.order_items  -- delete all dupes from clk_strm_sp.order_items
 WHERE root_id IN (SELECT root_id FROM clk_strm_sp.tmp_order_items_ids);

 INSERT INTO clk_strm_sp.order_items (             -- write only first occurrence back to clk_strm_sp.order_items
   SELECT root_id, 
   root_tstamp,
   derived_tstamp,
   etl_tstamp_local,
       outfit_id,
       gift_services,
       saved_for_later,
       store_pickup,
       product_rating,
       number_reviews,
       recommendation_percent,
       on_sale,
       brand_name,
       filter_used,
       search_term,
       sort_used,
       base_copy_split,
       true_fit,
       same_day_delivery,
       size,
       width,
       color,
       is_recognized,
       tag_id,
       style_number,
       vendor_order_id
FROM clk_strm_sp.tmp_order_items WHERE event_number = 1
);

  DROP TABLE IF EXISTS clk_strm_sp.tmp_order_items_ids;
  DROP TABLE IF EXISTS clk_strm_sp.tmp_order_items;

COMMIT;