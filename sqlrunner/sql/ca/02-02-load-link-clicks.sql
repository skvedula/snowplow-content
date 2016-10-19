COPY ato_sch.link_clicks
FROM 's3://cxar-ato-bigdata/snowplow-prod/temp/link_clicks'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/46111/CXAR/ATO/';