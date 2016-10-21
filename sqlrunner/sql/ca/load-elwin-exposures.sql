COPY ato_sch.elwin_exposures
FROM 's3://cxar-ato-bigdata/snowplow-prod/CA/elwin_exposures'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY';