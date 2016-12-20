unload (
'select
app_id,
event_id,
derived_tstamp,
domain_userid,
domain_sessionid,
tr_orderid,
tr_total
from clk_strm_sp.events
where event = \'transaction\'
and date(derived_tstamp) = date(getdate())-1
order by 3;')
to 's3://cxar-ato-bigdata/marketing/orders/'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY'
ESCAPE;