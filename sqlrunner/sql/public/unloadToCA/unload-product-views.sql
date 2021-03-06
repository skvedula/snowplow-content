UNLOAD ('SELECT root_id,
       root_tstamp,
       T1.derived_tstamp,
       etl_tstamp_local,
       page_url,
       product_id,
       product_category,
       style_number,
       product_name,
       on_sale,
       brand_name,
       fit_value,
       rack,
       available,
       tag_id
	FROM public.product_views    T1,
	atomic.temp_event_ids    T2
      WHERE T1.root_id = T2.event_id;') 
TO 's3://cxar-ato-bigdata/snowplow-prod/CA/product_views/'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY'
ESCAPE;
