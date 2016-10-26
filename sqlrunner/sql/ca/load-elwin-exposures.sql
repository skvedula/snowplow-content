COPY clk_strm_sp.elwin_exposures
FROM 's3://cxar-ato-bigdata/snowplow-dev/CA/elwin_exposures'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY'
ESCAPE;
