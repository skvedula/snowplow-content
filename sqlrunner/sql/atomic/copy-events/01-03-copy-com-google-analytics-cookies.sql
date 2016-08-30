-- Version: 0.1
--
-- Requires atomic.events 0.7.0

-- (a) get all events that are in atomic.events but not yet in public.events and stage for time zone conversion

-- DROP TABLE IF EXISTS atomic.tmp_com_google_analytics_cookies_1;

-- CREATE TABLE atomic.tmp_com_google_analytics_cookies_1
--   DISTKEY (root_id)
--   SORTKEY (root_id) 
-- AS (SELECT * FROM atomic.com_google_analytics_cookies_1 WHERE root_id IN (SELECT event_id FROM atomic.tmp_root_ids));

-- (b) perform time zone conversion on insert into public.events

INSERT INTO public.com_google_analytics_cookies_1 (

    SELECT schema_vendor,
       schema_name,
       schema_format,
       schema_version,
       root_id,
       convert_timezone('US/Pacific', root_tstamp),
       ref_root,
       ref_tree,
       ref_parent,
       __utma,
       __utmb,
       __utmc,
       __utmv,
       __utmz,
       _ga
      FROM atomic.com_google_analytics_cookies_1
      WHERE root_id IN (SELECT event_id FROM atomic.tmp_root_ids)

);

-- DROP TABLE IF EXISTS atomic.tmp_com_google_analytics_cookies_1;