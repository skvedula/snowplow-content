UNLOAD ('SELECT root_id,
       root_tstamp,
       T1.derived_tstamp,
       etl_tstamp_local,
       team_id,
       experiment_name,
       parameter_name,
       parameter_value,
       elwin_id
	FROM public.elwin_exposures    T1,
	atomic.temp_event_ids    T2
	WHERE T1.root_id = T2.event_id;') 
TO 's3://cxar-ato-bigdata/snowplow-prod/CA/elwin_exposures/'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY'
ESCAPE;
