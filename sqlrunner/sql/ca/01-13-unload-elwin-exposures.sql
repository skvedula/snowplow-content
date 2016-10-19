UNLOAD ('SELECT root_id,
       root_tstamp,
       T1.derived_tstamp,
       team_id,
       experiment_name,
       parameter_name,
       parameter_value,
       elwin_id
	FROM public.elwin_exposures    T1,
	atomic.temp_event_ids    T2
	      WHERE T1.root_id = T2.event_id
	      AND T1.derived_tstamp = T2.derived_tstamp;')
TO 's3://cxar-ato-bigdata/snowplow-prod/temp/elwin_exposures/'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/46111/CXAR/ATO/{{ROLE_NAME}}' gzip;