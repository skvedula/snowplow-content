-- snowplow-site-search.sql
-- Version: 1.0
--
-- Requires atomic.events 0.8.0

-- (a) get all events that are in atomic.events but not yet in public.events and perform time zone conversion

INSERT INTO public.com_snowplowanalytics_snowplow_site_search (

    SELECT schema_vendor,
       schema_name,
       schema_format,
       schema_version,
       root_id,
       root_tstamp,
       ref_root,
       ref_tree,
       ref_parent,
       terms,
       filters,
       total_results,
       page_results
FROM atomic.com_snowplowanalytics_snowplow_site_search_1
      WHERE root_id IN (SELECT event_id FROM scratchpad.event_id)

);