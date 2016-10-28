-- copy-events/nordstrom-remove-item.sql
-- Version: 1.0
--
-- Requires atomic.events 0.8.0

-- (a) get all events that are in atomic.events but not yet in public.events and perform time zone conversion

INSERT INTO public.nordstrom_remove_item (

    SELECT root_id,
       convert_timezone('US/Pacific', root_tstamp),
       convert_timezone('US/Pacific', T2.derived_tstamp),
       convert_timezone('US/Pacific', T2.etl_tstamp),
       document_url,
       style_number,
       style_id,
       size,
       width,
       color,
       percentage_off,
       sale_type,
       authenticated_status,
       bopus,
       store_number,
       mmp,
       tag_id,
       experiment_id,
       experiment_data
FROM atomic.com_nordstrom_remove_item_attrs_0    T1,
atomic.temp_event_ids    T2,
atomic.events T3
      WHERE T1.root_id = T2.event_id
      AND T2.event_id = T3.event_id
      AND T2.etl_tstamp = T3.etl_tstamp

);

INSERT INTO public.nordstrom_remove_item (

    SELECT root_id,
       convert_timezone('US/Pacific', root_tstamp),
       convert_timezone('US/Pacific', T2.derived_tstamp),
       convert_timezone('US/Pacific', T2.etl_tstamp),
       document_url,
       style_number,
       style_id,
       size,
       width,
       color,
       percentage_off,
       sale_type,
       authenticated_status,
       bopus,
       store_number,
       mmp,
       tag_id,
       experiment_id,
       experiment_data
FROM atomic.com_nordstrom_remove_item_attrs_1    T1,
atomic.temp_event_ids    T2,
atomic.events T3
      WHERE T1.root_id = T2.event_id
      AND T2.event_id = T3.event_id
      AND T2.etl_tstamp = T3.etl_tstamp

);