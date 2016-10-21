COPY ato_sch.link_clicks
FROM 's3://cxar-ato-bigdata/snowplow-prod/CA/link_clicks'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY';