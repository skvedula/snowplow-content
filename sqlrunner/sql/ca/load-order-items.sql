COPY clk_strm_sp.order_items
FROM 's3://cxar-ato-bigdata/snowplow-prod/CA/order_items'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY'
ESCAPE;
