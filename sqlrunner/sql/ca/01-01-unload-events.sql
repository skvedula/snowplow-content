UNLOAD ('SELECT * 
		FROM public.events 
		WHERE etl_tstamp IN (
			SELECT max(etl_tstamp) 
			FROM atomic.events
		);')
TO 's3://cxar-ato-bigdata/snowplow-prod/temp/events/'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/46111/CXAR/ATO/' gzip;