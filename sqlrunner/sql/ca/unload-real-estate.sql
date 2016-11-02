UNLOAD ('SELECT root_id,
       root_tstamp,
       T1.derived_tstamp,
       etl_tstamp_local,
       version,
       page_area,
       link
	FROM public.real_estate    T1,
	atomic.temp_event_ids    T2
      WHERE T1.root_id = T2.event_id;')
TO 's3://cxar-ato-bigdata/snowplow-prod/CA/real_estate/'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY'
ESCAPE;
