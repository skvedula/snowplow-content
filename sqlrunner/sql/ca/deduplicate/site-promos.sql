-- deduplicate clk_strm_sp.site_promos

DROP TABLE IF EXISTS clk_strm_sp.tmp_site_promos_ids;

CREATE TABLE clk_strm_sp.tmp_site_promos_ids  -- get all duplicate root_ids in clk_strm_sp.site_promos
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM clk_strm_sp.site_promos GROUP BY 1) WHERE count > 1);

DROP TABLE IF EXISTS clk_strm_sp.tmp_site_promos;

CREATE TABLE clk_strm_sp.tmp_site_promos       -- get full rows + duplicate number
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (
 SELECT T1.root_id, 
   root_tstamp,
   T1.derived_tstamp,
   T1.etl_tstamp_local,
       promotion_type,
       promotion,
       link,
ROW_NUMBER() OVER (PARTITION BY T1.root_id ORDER BY T1.derived_tstamp) as event_number
 FROM clk_strm_sp.site_promos T1,
 clk_strm_sp.tmp_site_promos_ids T2
 WHERE T1.root_id = T2.root_id
);

BEGIN;

 DELETE FROM clk_strm_sp.site_promos  -- delete all dupes from clk_strm_sp.site_promos
 WHERE root_id IN (SELECT root_id FROM clk_strm_sp.tmp_site_promos_ids);

 INSERT INTO clk_strm_sp.site_promos (             -- write only first occurrence back to clk_strm_sp.site_promos
   SELECT root_id, 
   root_tstamp,
   derived_tstamp,
   etl_tstamp_local,
       promotion_type,
       promotion,
       link
FROM clk_strm_sp.tmp_site_promos WHERE event_number = 1
);

  DROP TABLE IF EXISTS clk_strm_sp.tmp_site_promos_ids;
DROP TABLE IF EXISTS clk_strm_sp.tmp_site_promos;

COMMIT;