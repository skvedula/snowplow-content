COPY clk_strm_sp.snowplow_remove_from_cart
FROM 's3://cxar-ato-bigdata/snowplow-dev/CA/snowplow_remove_from_cart'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY'
ESCAPE;
