-- deduplicate clk_strm_sp.nordstrom_remove_item

DROP TABLE IF EXISTS clk_strm_sp.tmp_nordstrom_remove_item_ids;

CREATE TABLE clk_strm_sp.tmp_nordstrom_remove_item_ids  -- get all duplicate root_ids in clk_strm_sp.nordstrom_remove_item
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM clk_strm_sp.nordstrom_remove_item GROUP BY 1) WHERE count > 1);

DROP TABLE IF EXISTS clk_strm_sp.tmp_nordstrom_remove_item;

CREATE TABLE clk_strm_sp.tmp_nordstrom_remove_item       -- get full rows + duplicate number
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (
 SELECT T1.root_id, 
   root_tstamp,
   T1.derived_tstamp,
   T1.etl_tstamp_local,
       document_url,
       style_number,
       style_id,
       size,
       width,
       color,
       percentage_off,
       sale_type,
       authenticated_status,
       bopus,
       store_number,
       mmp,
       tag_id,
       experiment_id,
       experiment_data,
ROW_NUMBER() OVER (PARTITION BY T1.root_id ORDER BY T1.derived_tstamp) as event_number
 FROM clk_strm_sp.nordstrom_remove_item T1,
 clk_strm_sp.tmp_nordstrom_remove_item_ids T2
 WHERE T1.root_id = T2.root_id
);

BEGIN;

 DELETE FROM clk_strm_sp.nordstrom_remove_item  -- delete all dupes from clk_strm_sp.nordstrom_remove_item
 WHERE root_id IN (SELECT root_id FROM clk_strm_sp.tmp_nordstrom_remove_item_ids);

 INSERT INTO clk_strm_sp.nordstrom_remove_item (             -- write only first occurrence back to clk_strm_sp.nordstrom_remove_item
   SELECT root_id, 
   root_tstamp,
   derived_tstamp,
   etl_tstamp_local,
       document_url,
       style_number,
       style_id,
       size,
       width,
       color,
       percentage_off,
       sale_type,
       authenticated_status,
       bopus,
       store_number,
       mmp,
       tag_id,
       experiment_id,
       experiment_data
FROM clk_strm_sp.tmp_nordstrom_remove_item WHERE event_number = 1
);

  DROP TABLE IF EXISTS clk_strm_sp.tmp_nordstrom_remove_item_ids;
  DROP TABLE IF EXISTS clk_strm_sp.tmp_nordstrom_remove_item;

COMMIT;