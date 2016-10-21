UNLOAD ('SELECT root_id,
       root_tstamp,
       T1.derived_tstamp,
       terms,
       filters,
       total_results,
       page_results
	FROM public.search    T1,
	atomic.temp_event_ids    T2
      WHERE T1.root_id = T2.event_id
      AND T1.derived_tstamp = convert_timezone('US/Pacific', T2.derived_tstamp;') 
TO 's3://cxar-ato-bigdata/snowplow-prod/temp/search/'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY';