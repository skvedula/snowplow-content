-- get event_id for child table root_ids

INSERT INTO ato5180.scratchpad_event_id (

  SELECT
    event_id AS id
  FROM atomic.events
  WHERE etl_tstamp IN (SELECT etl_tstamp FROM ato5180.scratchpad_etl_tstamps ORDER BY 1)
  ORDER BY 1

);