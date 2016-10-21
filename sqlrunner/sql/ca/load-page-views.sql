COPY ato_sch.page_views
FROM 's3://cxar-ato-bigdata/snowplow-prod/temp/page_views'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY';