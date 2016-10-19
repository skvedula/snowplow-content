-- Version: 0.1
--
-- Requires ato_sch.events 0.8.0

-- (a) get all events that are in atomic.events but not yet in public.events and insert with time zone conversion


COPY 
from 's3://cxar-ato-bigdata/snowplow-prod/temp/'
credentials 'aws_iam_role=arn:aws:iam::832038866117:role/46111/CXAR/ATO/';