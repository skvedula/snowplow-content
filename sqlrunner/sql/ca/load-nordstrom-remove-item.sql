COPY clk_strm_sp.nordstrom_remove_item
FROM 's3://cxar-ato-bigdata/snowplow-dev/CA/nordstrom_remove_item'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY'
ESCAPE;
