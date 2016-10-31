COPY clk_strm_sp.site_promos
FROM 's3://cxar-ato-bigdata/snowplow-dev/CA/site_promos'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY'
ESCAPE;
