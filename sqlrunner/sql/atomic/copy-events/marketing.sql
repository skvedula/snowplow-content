-- snowplow-timing.sql
-- Version: 1.0
--
-- Requires atomic.events 0.8.0

-- (a) get all events that are in atomic.events but not yet in public.events and perform time zone conversion

INSERT INTO public.marketing (

    SELECT root_id,
       convert_timezone('US/Pacific', root_tstamp),
       convert_timezone('US/Pacific', derived_tstamp),
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
FROM atomic.com_nordstrom_marketing_attrs_1    T1,
scratchpad.event_id    T2
      WHERE T1.root_id = T2.event_id

);