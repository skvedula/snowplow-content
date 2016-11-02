COPY clk_strm_sp.marketing
FROM 's3://cxar-ato-bigdata/snowplow-prod/CA/marketing'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY'
ESCAPE;
