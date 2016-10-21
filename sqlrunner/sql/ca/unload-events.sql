UNLOAD ('SELECT * 
		FROM public.events 
		WHERE etl_tstamp IN (
			SELECT max(etl_tstamp) 
			FROM public.events
		);')
TO 's3://cxar-ato-bigdata/snowplow-prod/CA/events/'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY';