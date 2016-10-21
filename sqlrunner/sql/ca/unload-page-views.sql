UNLOAD ('SELECT root_id,
       root_tstamp,
       T1.derived_tstamp,
       page_url,
       page_category,
       page_template,
       style_number,
       is_recognized,
       search_term,
       search_results_count,
       tag_id,
       experiment_id,
       experiment_data
	FROM public.page_views    T1,
	atomic.temp_event_ids    T2
      WHERE T1.root_id = T2.event_id
      AND T1.derived_tstamp = convert_timezone('US/Pacific', T2.derived_tstamp;') 
TO 's3://cxar-ato-bigdata/snowplow-prod/CA/page_views/'
CREDENTIALS 'aws_iam_role=arn:aws:iam::832038866117:role/a0007-Redshift-COPY';