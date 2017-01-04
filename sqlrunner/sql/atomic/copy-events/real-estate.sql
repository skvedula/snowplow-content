-- copy-events/link-clicks.sql
-- Version: 1.0
--
-- Requires atomic.events 0.8.0

-- (a) get all events that are in atomic.events but not yet in public.events and perform time zone conversion

INSERT INTO public.real_estate (

    SELECT root_id,
       convert_timezone('US/Pacific', root_tstamp),
       convert_timezone('US/Pacific', derived_tstamp),
       convert_timezone('US/Pacific', etl_tstamp),
       version,
       page_area,
       link
FROM atomic.com_nordstrom_real_estate_1    T1,
atomic.temp_event_ids    T2
      WHERE T1.root_id = T2.event_id

);