-- copy-events/link-clicks.sql
-- Version: 1.0
--
-- Requires atomic.events 0.8.0

-- (a) get all events that are in atomic.events but not yet in public.events and perform time zone conversion

INSERT INTO public.link_clicks (

    SELECT root_id,
       convert_timezone('US/Pacific', root_tstamp),
       convert_timezone('US/Pacific', T2.derived_tstamp),
       convert_timezone('US/Pacific', T2.etl_tstamp),
       element_id,
       element_classes,
       element_target,
       target_url
FROM atomic.com_snowplowanalytics_snowplow_link_click_1    T1,
atomic.temp_event_ids    T2,
atomic.events T3
      WHERE T1.root_id = T2.event_id
      AND T2.event_id = T3.event_id
      AND T2.etl_tstamp = T3.etl_tstamp

);