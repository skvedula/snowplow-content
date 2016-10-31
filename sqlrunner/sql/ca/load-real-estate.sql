COPY clk_strm_sp.real_estate
FROM 's3://cxar-ato-bigdata/snowplow-dev/CA/real_estate'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY'
ESCAPE;
