COPY ato_sch.snowplow_add_to_cart
FROM 's3://cxar-ato-bigdata/snowplow-prod/temp/snowplow_add_to_cart'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY';