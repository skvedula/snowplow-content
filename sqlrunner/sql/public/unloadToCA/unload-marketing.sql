UNLOAD ('SELECT root_id,
       root_tstamp,
       T1.derived_tstamp,
       etl_tstamp_local,
       mkt_source,
       mkt_medium,
       mkt_campaign,
       mkt_term,
       mkt_content,
       mkt_cm_camp_name,
       mkt_cm_camp_uid,
       mkt_rkg_id,
       mkt_linkshare_siteid,
       mkt_cm_em
	FROM public.marketing    T1,
	atomic.temp_event_ids    T2
      WHERE T1.root_id = T2.event_id;') 
TO 's3://cxar-ato-bigdata/snowplow-prod/CA/marketing/'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY'
ESCAPE;
