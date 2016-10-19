COPY ato_sch.elwin_exposures
FROM 's3://cxar-ato-bigdata/snowplow-prod/temp/elwin_exposures'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/46111/CXAR/ATO/';