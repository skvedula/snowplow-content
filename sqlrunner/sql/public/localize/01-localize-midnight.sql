-- Data Model: localize
-- Version: 0.1
--
-- Requires atomic.events 0.7.0
--
-- These SQL queries can be run without modifications.

-- (a) create temp table with data from last ETL job

DROP TABLE IF EXISTS staging.tmp_events;

CREATE TABLE staging.tmp_events
  DISTKEY (event_id)
  SORTKEY (event_id)
AS (

  SELECT event_id, domain_userid, collector_tstamp, etl_tstamp
  FROM atomic.events
  WHERE trunc(collector_tstamp) = trunc(getdate()-1) -- limit to last ETL, to run in batch runner

);

-- (b) list all event_id & event_fingerprint combinations that occur more than once
--
-- Step 1 converts the server timestamp to our local time zone
--
-- Step 2 calculates the time difference between an event's local timestamp and the user's previous event timestamp
--
-- Step 3 increments a counter for every result that (Case 1) exceeds 30 minutes or (Case 2) is < 30 minutes after midnight
--
-- Step 4 sums the new sessions calculated by Step 3
--
-- Finally, the query aggregates and returns the recalculated session totals by day.

-- CREATE TABLE IF NOT EXISTS staging.local_sessions (
--   -- Schema of this type
--   min_tstamp    timestamp   encode raw not null,
--   visits        integer
-- );

INSERT INTO staging.local_sessions (

  WITH step_1 AS (

    SELECT 
      domain_userid,
      convert_timezone('US/Pacific', collector_tstamp) as tstamp
    FROM staging.tmp_events

  ), step_2 AS (

    SELECT
      domain_userid,
      tstamp,
      LAG(tstamp, 1) OVER (PARTITION BY domain_userid ORDER BY tstamp) AS previous_tstamp
    FROM step_1

  ), step_3 AS (

    SELECT
      domain_userid,
      tstamp,
      previous_tstamp,
      CASE 
        WHEN EXTRACT(EPOCH FROM (tstamp - previous_tstamp)) > 60*30 THEN 1 
        WHEN datediff(min, Cast(trunc(tstamp) as timestamp), tstamp) between 0 and 30 THEN 1
        ELSE 0
      END AS new_session
    FROM step_2

  ), step_4 AS (

    SELECT
      domain_userid,
      tstamp,
      previous_tstamp,
      new_session,
      SUM(new_session) OVER (PARTITION BY domain_userid ORDER BY tstamp ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS session_idx
    FROM step_3

  )
  select
  MIN(tstamp) AS min_tstamp,
  COUNT(distinct(domain_userid || '-' || session_idx)) as "Visits"
  from step_4
  group by trunc(tstamp)
  order by trunc(tstamp)

);

-- (c) drop tables

DROP TABLE IF EXISTS staging.tmp_events;