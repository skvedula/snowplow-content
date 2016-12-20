unload (
'select
app_id,
event_id,
T1.derived_tstamp,
domain_userid,
domain_sessionid,
page_urlhost,
page_url,
page_referrer,
refr_medium,
dvce_type,
os_family,
T2.mkt_source,
T2.mkt_medium,
T2.mkt_campaign,
T2.mkt_term
from clk_strm_sp.events T1,
clk_strm_sp.marketing T2
where 
T1.event = \'page_view\'
and date(T1.derived_tstamp) = date(getdate())-1
and T1.event_id = T2.root_id
and (T2.mkt_source is not null
or T2.mkt_medium is not null
or T2.mkt_campaign is not null
or T2.mkt_term is not null)
order by 3;')
to 's3://cxar-ato-bigdata/marketing/page_views/'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY'
ESCAPE;