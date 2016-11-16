UNLOAD ('SELECT root_id,
       root_tstamp,
       T1.derived_tstamp,
       etl_tstamp_local,
       element_id,
       element_classes,
       element_target,
       target_url
	FROM public.link_clicks    T1,
	atomic.temp_event_ids    T2
      WHERE T1.root_id = T2.event_id;')
TO 's3://cxar-ato-bigdata/snowplow-prod/CA/link_clicks/'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY'
ESCAPE;
