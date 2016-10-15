-- close operation by appending etl_tstamp to manifest

ALTER TABLE atomic.etl_tstamps APPEND FROM atomic.temp_etl_tstamps;