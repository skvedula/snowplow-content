COPY ato_sch.nordstrom_remove_item
FROM 's3://cxar-ato-bigdata/snowplow-prod/temp/nordstrom_remove_item'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/46111/CXAR/ATO/';