COPY ato_sch.timing
FROM 's3://cxar-ato-bigdata/snowplow-prod/CA/timing'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY';