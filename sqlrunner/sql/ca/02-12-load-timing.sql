COPY ato_sch.timing
FROM 's3://cxar-ato-bigdata/snowplow-prod/temp/timing'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/46111/CXAR/ATO/';