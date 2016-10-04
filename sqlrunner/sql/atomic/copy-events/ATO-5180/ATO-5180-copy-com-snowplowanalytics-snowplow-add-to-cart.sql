-- 01-09-copy-com-snowplowanalytics-snowplow-add-to-cart.sql
-- Version: 0.1
--
-- Requires atomic.events 0.7.0

-- (a) get all events that are in atomic.events but not yet in public.events and stage for time zone conversion

-- DROP TABLE IF EXISTS atomic.tmp_com_snowplowanalytics_snowplow_add_to_cart_1;

-- CREATE TABLE atomic.tmp_com_snowplowanalytics_snowplow_add_to_cart_1
--   DISTKEY (root_id)
--   SORTKEY (root_id) 
-- AS (SELECT * FROM atomic.com_snowplowanalytics_snowplow_add_to_cart_1 WHERE root_id IN (SELECT event_id FROM atomic.tmp_root_ids));

-- (b) perform time zone conversion on insert into public.events

INSERT INTO ato5180.com_snowplowanalytics_snowplow_add_to_cart (

    SELECT schema_vendor,
       schema_name,
       schema_format,
       schema_version,
       root_id,
       convert_timezone('US/Pacific', root_tstamp),
       ref_root,
       ref_tree,
       ref_parent,
       sku,
       name,
       category,
       unit_price,
       quantity,
       currency
FROM atomic.com_snowplowanalytics_snowplow_add_to_cart_1
      WHERE root_id IN (SELECT event_id FROM ato5180.scratchpad_event_id)

);

-- DROP TABLE IF EXISTS atomic.tmp_com_snowplowanalytics_snowplow_add_to_cart_1;

--       convert_timezone('US/Pacific', root_tstamp)