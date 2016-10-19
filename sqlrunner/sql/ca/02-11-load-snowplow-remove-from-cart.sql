COPY ato_sch.snowplow_remove_from_cart
FROM 's3://cxar-ato-bigdata/snowplow-prod/temp/snowplow_remove_from_cart'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/46111/CXAR/ATO/';