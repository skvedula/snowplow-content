COPY clk_strm_sp.product_views
FROM 's3://cxar-ato-bigdata/snowplow-prod/CA/product_views'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY'
ESCAPE;
