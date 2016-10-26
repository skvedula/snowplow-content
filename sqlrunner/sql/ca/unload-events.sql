UNLOAD ('SELECT * 
		FROM public.events 
		WHERE etl_tstamp IN (
			SELECT etl_tstamp
			FROM atomic.temp_etl_tstamps ORDER BY 1
		);')
TO 's3://cxar-ato-bigdata/snowplow-dev/CA/events/'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY'
ESCAPE;
