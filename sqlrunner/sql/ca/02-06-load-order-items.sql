COPY ato_sch.order_items
FROM 's3://cxar-ato-bigdata/snowplow-prod/temp/order_items'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/46111/CXAR/ATO/';