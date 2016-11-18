-- deduplicate clk_strm_sp.timing

DROP TABLE IF EXISTS clk_strm_sp.tmp_timing_ids;

CREATE TABLE clk_strm_sp.tmp_timing_ids  -- get all duplicate root_ids in clk_strm_sp.timing
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM clk_strm_sp.timing GROUP BY 1) WHERE count > 1);

DROP TABLE IF EXISTS clk_strm_sp.tmp_timing;

CREATE TABLE clk_strm_sp.tmp_timing       -- get full rows + duplicate number
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (
 SELECT T1.root_id, 
   root_tstamp,
   T1.derived_tstamp,
   T1.etl_tstamp_local,
       category,
       variable,
       timing,
       label,
ROW_NUMBER() OVER (PARTITION BY T1.root_id ORDER BY T1.derived_tstamp) as event_number
 FROM clk_strm_sp.timing T1,
 clk_strm_sp.tmp_timing_ids T2
 WHERE T1.root_id = T2.root_id
);

BEGIN;

 DELETE FROM clk_strm_sp.timing  -- delete all dupes from clk_strm_sp.timing
 WHERE root_id IN (SELECT root_id FROM clk_strm_sp.tmp_timing_ids);

 INSERT INTO clk_strm_sp.timing (             -- write only first occurrence back to clk_strm_sp.timing
   SELECT root_id, 
   root_tstamp,
   derived_tstamp,
   etl_tstamp_local,
       category,
       variable,
       timing,
       label
FROM clk_strm_sp.tmp_timing WHERE event_number = 1
);

  DROP TABLE IF EXISTS clk_strm_sp.tmp_timing_ids;
DROP TABLE IF EXISTS clk_strm_sp.tmp_timing;

COMMIT;