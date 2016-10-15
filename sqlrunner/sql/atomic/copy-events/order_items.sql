-- nordstrom-order-item-attrs.sql
-- Version: 1.0
--
-- Requires atomic.events 0.8.0

-- (a) get all events that are in atomic.events but not yet in public.events and perform time zone conversion

INSERT INTO public.com_nordstrom_order_item_attrs (

    SELECT root_id,
       convert_timezone('US/Pacific', root_tstamp),
       convert_timezone('US/Pacific', derived_tstamp),
       outfit_id,
       gift_services,
       saved_for_later,
       store_pickup,
       product_rating,
       number_reviews,
       recommendation_percent,
       on_sale,
       brand_name,
       filter_used,
       search_term,
       sort_used,
       base_copy_split,
       true_fit,
       same_day_delivery,
       sku,
       size,
       width,
       color,
       is_recognized,
       tag_id
FROM atomic.com_nordstrom_order_item_attrs_0    T1,
atomic.temp_event_ids    T2
      WHERE T1.root_id = T2.event_id

);

INSERT INTO public.com_nordstrom_order_item_attrs (

    SELECT root_id,
       convert_timezone('US/Pacific', root_tstamp),
       convert_timezone('US/Pacific', derived_tstamp),
       outfit_id,
       gift_services,
       saved_for_later,
       store_pickup,
       product_rating,
       number_reviews,
       recommendation_percent,
       on_sale,
       brand_name,
       filter_used,
       search_term,
       sort_used,
       base_copy_split,
       true_fit,
       same_day_delivery,
       sku,
       size,
       width,
       color,
       is_recognized,
       tag_id
FROM atomic.com_nordstrom_order_item_attrs_1    T1,
atomic.temp_event_ids    T2
      WHERE T1.root_id = T2.event_id

);