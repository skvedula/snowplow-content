COPY ato_sch.product_views
FROM 's3://cxar-ato-bigdata/snowplow-prod/temp/product_views'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/46111/CXAR/ATO/';