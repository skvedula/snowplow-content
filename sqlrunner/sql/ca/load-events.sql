COPY ato_sch.events
FROM 's3://cxar-ato-bigdata/snowplow-prod/temp/events'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY';