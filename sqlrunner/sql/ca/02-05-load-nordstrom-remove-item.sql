UNLOAD ('select * from public.events where etl_tstamp in (select max(etl_tstamp) from atomic.events)')
to 's3://cxar-ato-bigdata/snowplow-prod/temp/'
credentials 'aws_iam_role=arn:aws:iam::832038866117:role/46111/CXAR/ATO/' gzip;