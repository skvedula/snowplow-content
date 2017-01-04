-- deduplicate clk_strm_sp.snowplow_remove_from_cart

DROP TABLE IF EXISTS clk_strm_sp.tmp_snowplow_remove_from_cart_ids;

CREATE TABLE clk_strm_sp.tmp_snowplow_remove_from_cart_ids  -- get all duplicate root_ids in clk_strm_sp.snowplow_remove_from_cart
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM clk_strm_sp.snowplow_remove_from_cart GROUP BY 1) WHERE count > 1);

DROP TABLE IF EXISTS clk_strm_sp.tmp_snowplow_remove_from_cart;

CREATE TABLE clk_strm_sp.tmp_snowplow_remove_from_cart       -- get full rows + duplicate number
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
 FROM clk_strm_sp.snowplow_remove_from_cart T1,
 clk_strm_sp.tmp_snowplow_remove_from_cart_ids T2
 WHERE T1.root_id = T2.root_id
);

BEGIN;

 DELETE FROM clk_strm_sp.snowplow_remove_from_cart  -- delete all dupes from clk_strm_sp.snowplow_remove_from_cart
 WHERE root_id IN (SELECT root_id FROM clk_strm_sp.tmp_snowplow_remove_from_cart_ids);

 INSERT INTO clk_strm_sp.snowplow_remove_from_cart (             -- write only first occurrence back to clk_strm_sp.snowplow_remove_from_cart
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
FROM clk_strm_sp.tmp_snowplow_remove_from_cart WHERE event_number = 1
);

  DROP TABLE IF EXISTS clk_strm_sp.tmp_snowplow_remove_from_cart_ids;
DROP TABLE IF EXISTS clk_strm_sp.tmp_snowplow_remove_from_cart;

COMMIT;