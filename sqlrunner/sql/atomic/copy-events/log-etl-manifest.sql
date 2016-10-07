-- close operation by appending etl_tstamp to manifest

ALTER TABLE derived.etl_tstamps APPEND FROM scratchpad.etl_tstamps;