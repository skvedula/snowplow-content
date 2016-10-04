-- close operation by appending etl_tstamp to manifest

ALTER TABLE ato5180.derived_etl_tstamps APPEND FROM ato5180.scratchpad_etl_tstamps;