-- copy-events/page-views.sql
-- Version: 1.0
--
-- Requires atomic.events 0.8.0

-- (a) get all events that are in atomic.events but not yet in public.events and perform time zone conversion

INSERT INTO public.page_views (

    SELECT root_id,
       convert_timezone('US/Pacific', root_tstamp),
       convert_timezone('US/Pacific', derived_tstamp),
       T1.page_url,
       page_category,
       page_template,
       style_number,
       is_recognized,
       search_term,
       search_results_count,
       tag_id,
       experiment_id,
       experiment_data
FROM atomic.com_nordstrom_page_view_attrs_0    T1,
atomic.temp_event_ids    T2
      WHERE T1.root_id = T2.event_id
      AND T1.root_tstamp = T2.collector_tstamp

);

INSERT INTO public.page_views (

    SELECT root_id,
       convert_timezone('US/Pacific', root_tstamp),
       convert_timezone('US/Pacific', derived_tstamp),
       T1.page_url,
       page_category,
       page_template,
       style_number,
       is_recognized,
       search_term,
       search_results_count,
       tag_id,
       experiment_id,
       experiment_data
FROM atomic.com_nordstrom_page_view_attrs_1    T1,
atomic.temp_event_ids    T2
      WHERE T1.root_id = T2.event_id
      AND T1.root_tstamp = T2.collector_tstamp

);