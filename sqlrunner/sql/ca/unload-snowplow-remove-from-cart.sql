UNLOAD ('SELECT root_id,
       root_tstamp,
       T1.derived_tstamp,
       etl_tstamp_local,
       sku,
       name,
       category,
       unit_price,
       quantity,
       currency
	FROM public.snowplow_remove_from_cart    T1,
	atomic.temp_event_ids    T2
      WHERE T1.root_id = T2.event_id;') 
TO 's3://cxar-ato-bigdata/snowplow-dev/CA/snowplow_remove_from_cart/'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY'
ESCAPE;
