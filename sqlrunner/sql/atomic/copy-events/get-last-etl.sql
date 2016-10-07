-- empty temp table
TRUNCATE scratchpad.etl_tstamps; 
ANALYZE scratchpad.etl_tstamps;

TRUNCATE scratchpad.event_id; 
ANALYZE scratchpad.event_id;


-- get etl_tstamps from last week that are not already in manifest

INSERT INTO scratchpad.etl_tstamps (

  WITH recent_etl_tstamps AS ( -- return all recent ETL timestamps

    SELECT
      DISTINCT etl_tstamp
    FROM atomic.events
    WHERE collector_tstamp > DATEADD(week, -1, CURRENT_DATE) -- restrict table scan to the last week (SORTKEY)
    ORDER BY 1

  )

  -- return all ETL timestamps that are not in the manifest (i.e. that have NOT been processed)

  SELECT
    DISTINCT etl_tstamp
  FROM recent_etl_tstamps
  WHERE etl_tstamp NOT IN (SELECT etl_tstamp FROM derived.etl_tstamps ORDER BY 1)
  ORDER BY 1

);