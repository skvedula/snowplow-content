-- snowplow-add-to-cart.sql
-- Version: 1.0
--
-- Requires atomic.events 0.8.0

-- (a) get all events that are in atomic.events but not yet in public.events and perform time zone conversion

INSERT INTO public.com_snowplowanalytics_snowplow_add_to_cart (

    SELECT root_id,
       convert_timezone('US/Pacific', root_tstamp),
       convert_timezone('US/Pacific', derived_tstamp),
       sku,
       name,
       category,
       unit_price,
       quantity,
       currency
FROM atomic.com_snowplowanalytics_snowplow_add_to_cart_1    T1,
atomic.temp_event_ids    T2
      WHERE T1.root_id = T2.event_id

);