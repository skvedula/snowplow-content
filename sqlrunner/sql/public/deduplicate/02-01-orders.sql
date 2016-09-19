-- Data Model: deduplicate
-- Version: 0.1
--
-- Requires public.events 0.7.0
--
-- Steps (a) get event_id and tr_orderid where a single tr_orderid occurs > 1, (b) get full records and count matching rows from step a, and (c) remove duplicates from public.events and repopulate the first occurrence from step b

DROP TABLE IF EXISTS duplicates.tmp_orders;

DROP TABLE IF EXISTS duplicates.tmp_order_ids_remaining;

-- (a) get event and order IDs where tr_orderid count > 1

CREATE TABLE duplicates.tmp_order_ids_remaining
 DISTKEY (event_id)
 SORTKEY (event_id)
AS (SELECT event_id, tr_orderid
       FROM public.events
       WHERE tr_orderid IN
       (SELECT tr_orderid FROM (SELECT tr_orderid, COUNT(*) AS count FROM public.events GROUP BY 1) WHERE count > 1)
);

-- (b) get full records and count matching rows

DROP TABLE IF EXISTS duplicates.tmp_orders;

CREATE TABLE duplicates.tmp_orders
 DISTKEY (event_id)
 SORTKEY (event_id)
AS (

 SELECT *, ROW_NUMBER() OVER (PARTITION BY tr_orderid ORDER BY collector_tstamp) as event_number
 FROM public.events
 WHERE event_id IN (SELECT event_id FROM duplicates.tmp_order_ids_remaining)
);

-- (c) remove duplicates from public.events

BEGIN;

 DELETE FROM public.events
 WHERE event_id IN (SELECT event_id FROM duplicates.tmp_order_ids_remaining);

 INSERT INTO public.events (

   SELECT app_id,
       platform,
       etl_tstamp,
       collector_tstamp,
       dvce_created_tstamp,
       event,
       event_id,
       txn_id,
       name_tracker,
       v_tracker,
       v_collector,
       v_etl,
       user_id,
       user_ipaddress,
       user_fingerprint,
       domain_userid,
       domain_sessionidx,
       network_userid,
       geo_country,
       geo_region,
       geo_city,
       geo_zipcode,
       geo_latitude,
       geo_longitude,
       geo_region_name,
       ip_isp,
       ip_organization,
       ip_domain,
       ip_netspeed,
       page_url,
       page_title,
       page_referrer,
       page_urlscheme,
       page_urlhost,
       page_urlport,
       page_urlpath,
       page_urlquery,
       page_urlfragment,
       refr_urlscheme,
       refr_urlhost,
       refr_urlport,
       refr_urlpath,
       refr_urlquery,
       refr_urlfragment,
       refr_medium,
       refr_source,
       refr_term,
       mkt_medium,
       mkt_source,
       mkt_term,
       mkt_content,
       mkt_campaign,
       se_category,
       se_action,
       se_label,
       se_property,
       se_value,
       tr_orderid,
       tr_affiliation,
       tr_total,
       tr_tax,
       tr_shipping,
       tr_city,
       tr_state,
       tr_country,
       ti_orderid,
       ti_sku,
       ti_name,
       ti_category,
       ti_price,
       ti_quantity,
       pp_xoffset_min,
       pp_xoffset_max,
       pp_yoffset_min,
       pp_yoffset_max,
       useragent,
       br_name,
       br_family,
       br_version,
       br_type,
       br_renderengine,
       br_lang,
       br_features_pdf,
       br_features_flash,
       br_features_java,
       br_features_director,
       br_features_quicktime,
       br_features_realplayer,
       br_features_windowsmedia,
       br_features_gears,
       br_features_silverlight,
       br_cookies,
       br_colordepth,
       br_viewwidth,
       br_viewheight,
       os_name,
       os_family,
       os_manufacturer,
       os_timezone,
       dvce_type,
       dvce_ismobile,
       dvce_screenwidth,
       dvce_screenheight,
       doc_charset,
       doc_width,
       doc_height,
       tr_currency,
       tr_total_base,
       tr_tax_base,
       tr_shipping_base,
       ti_currency,
       ti_price_base,
       base_currency,
       geo_timezone,
       mkt_clickid,
       mkt_network,
       etl_tags,
       dvce_sent_tstamp,
       refr_domain_userid,
       refr_dvce_tstamp,
       domain_sessionid,
       derived_tstamp,
       event_vendor,
       event_name,
       event_format,
       event_version,
       event_fingerprint,
       true_tstamp,
       etl_tstamp_local
   FROM duplicates.tmp_orders WHERE event_number = 1

);

COMMIT;

-- (e) drop tables

DROP TABLE IF EXISTS duplicates.tmp_orders;

DROP TABLE IF EXISTS duplicates.tmp_order_ids_remaining;
