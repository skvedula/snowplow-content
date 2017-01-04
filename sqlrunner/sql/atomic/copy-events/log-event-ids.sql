-- copy-events/log-event-ids.sql
-- get event_id for child table root_ids

TRUNCATE atomic.temp_event_ids; 

INSERT INTO atomic.temp_event_ids (

  SELECT
    event_id,
    derived_tstamp,
    collector_tstamp,
    etl_tstamp
  FROM atomic.events
  WHERE etl_tstamp IN (SELECT etl_tstamp FROM atomic.temp_etl_tstamps ORDER BY 1)
  AND (br_name is null or br_name <> 'Robot/Spider')
  ORDER BY 1

);

ANALYZE atomic.temp_event_ids;