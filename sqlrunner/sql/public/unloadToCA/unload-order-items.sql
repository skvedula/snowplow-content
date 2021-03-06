UNLOAD ('SELECT root_id,
       root_tstamp,
       T1.derived_tstamp,
       etl_tstamp_local,
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
       size,
       width,
       color,
       is_recognized,
       tag_id,
       style_number,
       vendor_order_id
	FROM public.order_items    T1,
	atomic.temp_event_ids    T2
      WHERE T1.root_id = T2.event_id;') 
TO 's3://cxar-ato-bigdata/snowplow-prod/CA/order_items/'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY'
ESCAPE;
