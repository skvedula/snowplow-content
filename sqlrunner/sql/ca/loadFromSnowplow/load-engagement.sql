COPY clk_strm_sp.engagement
FROM 's3://cxar-ato-bigdata/snowplow-prod/CA/engagement'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY'
ESCAPE;
