--events.ti_sku currently contains style number
--order_item_attrs.sku contains actual sku
--only affects transaction item attribution

--atomic

INSERT INTO atomic.events_sku (
	SELECT *
	FROM atomic.events
);

DELETE FROM atomic.events_sku
WHERE event = 'transaction_item';

INSERT INTO atomic.events_sku (
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

       T2.sku,

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
       true_tstamp
    FROM atomic.events T1,
    atomic.com_nordstrom_order_item_attrs_0 T2
    WHERE T1.event = 'transaction_item'
    AND T1.event_id = T2.root_id
    AND date(T1.collector_tstamp) = date(T2.root_tstamp)
);

INSERT INTO atomic.events_sku (
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

       T2.sku,

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
       true_tstamp
    FROM atomic.events T1,
    atomic.com_nordstrom_order_item_attrs_1 T2
    WHERE T1.event = 'transaction_item'
    AND T1.event_id = T2.root_id
    AND date(T1.collector_tstamp) = date(T2.root_tstamp)
);

INSERT INTO atomic.com_nordstrom_order_item_attrs_0_style (
	SELECT schema_vendor,
		schema_name,
		schema_format,
		schema_version,
		root_id,
       root_tstamp,
       ref_root,
       ref_tree,
       ref_parent,
       outfit_id,
       gift_services,
       saved_for_later,
       store_pickup,
       product_rating,
       number_reviews,
       recommendation_percent,
       on_sale,
       brand_name,
       filter_used,
       search_term,
       sort_used,
       base_copy_split,
       true_fit,
       same_day_delivery,
       size,
       width,
       color,
       is_recognized,
       tag_id,
       T1.ti_sku
    FROM atomic.events T1,
    atomic.com_nordstrom_order_item_attrs_0 T2
    WHERE T1.event = 'transaction_item'
    AND T1.event_id = T2.root_id
    AND date(T1.collector_tstamp) = date(T2.root_tstamp)
);

INSERT INTO atomic.com_nordstrom_order_item_attrs_1_style (
	SELECT schema_vendor,
		schema_name,
		schema_format,
		schema_version,
		root_id,
       root_tstamp,
       ref_root,
       ref_tree,
       ref_parent,
       outfit_id,
       gift_services,
       saved_for_later,
       store_pickup,
       product_rating,
       number_reviews,
       recommendation_percent,
       on_sale,
       brand_name,
       filter_used,
       search_term,
       sort_used,
       base_copy_split,
       true_fit,
       same_day_delivery,
       size,
       width,
       color,
       is_recognized,
       tag_id,
       T1.ti_sku
    FROM atomic.events T1,
    atomic.com_nordstrom_order_item_attrs_1 T2
    WHERE T1.event = 'transaction_item'
    AND T1.event_id = T2.root_id
    AND date(T1.collector_tstamp) = date(T2.root_tstamp)
);

--pending successful transfer and QA:
ALTER TABLE atomic.events rename to events_bak;
ALTER TABLE atomic.events_sku rename to events;
DROP TABLE atomic.events_bak;

ALTER TABLE atomic.com_nordstrom_order_item_attrs_0 rename to com_nordstrom_order_item_attrs_0_bak;
ALTER TABLE atomic.com_nordstrom_order_item_attrs_0_style rename to com_nordstrom_order_item_attrs_0;
DROP TABLE atomic.com_nordstrom_order_item_attrs_0_bak;

ALTER TABLE atomic.com_nordstrom_order_item_attrs_1 rename to com_nordstrom_order_item_attrs_1_bak;
ALTER TABLE atomic.com_nordstrom_order_item_attrs_1_style rename to com_nordstrom_order_item_attrs_1;
DROP TABLE atomic.com_nordstrom_order_item_attrs_1_bak;


--public

INSERT INTO public.events_sku (
	SELECT *
	FROM public.events
);

DELETE FROM public.events_sku
WHERE event = 'transaction_item';

INSERT INTO public.events_sku (
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

       T2.sku,

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
       T1.derived_tstamp,
       event_vendor,
       event_name,
       event_format,
       event_version,
       event_fingerprint,
       true_tstamp,
       T1.etl_tstamp_local
    FROM public.events T1,
    public.order_items T2
    WHERE T1.event = 'transaction_item'
    AND T1.event_id = T2.root_id
    AND date(T1.collector_tstamp) = date(T2.root_tstamp)
);

INSERT INTO public.order_items_style (
	SELECT root_id,
       root_tstamp,
       T2.derived_tstamp,
       T2.etl_tstamp_local,
       outfit_id,
       gift_services,
       saved_for_later,
       store_pickup,
       product_rating,
       number_reviews,
       recommendation_percent,
       on_sale,
       brand_name,
       filter_used,
       search_term,
       sort_used,
       base_copy_split,
       true_fit,
       same_day_delivery,
       size,
       width,
       color,
       is_recognized,
       tag_id,
       T1.ti_sku
    FROM public.events T1,
    public.order_items T2
    WHERE T1.event = 'transaction_item'
    AND T1.event_id = T2.root_id
    AND date(T1.collector_tstamp) = date(T2.root_tstamp)
);

--pending successful transfer and QA:
ALTER TABLE public.events rename to events_bak;
ALTER TABLE public.events_sku rename to events;
DROP TABLE public.events_bak;

ALTER TABLE public.order_items rename to order_items_bak;
ALTER TABLE public.order_items_style rename to order_items;
DROP TABLE public.order_items_bak;


--clk_strm_sp

INSERT INTO clk_strm_sp.events_sku (
	SELECT *
	FROM clk_strm_sp.events
);

DELETE FROM clk_strm_sp.events_sku
WHERE event = 'transaction_item';

INSERT INTO clk_strm_sp.events_sku (
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

       T2.sku,

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
       T1.derived_tstamp,
       event_vendor,
       event_name,
       event_format,
       event_version,
       event_fingerprint,
       true_tstamp,
       T1.etl_tstamp_local
    FROM clk_strm_sp.events T1,
    clk_strm_sp.order_items T2
    WHERE T1.event = 'transaction_item'
    AND T1.event_id = T2.root_id
    AND date(T1.collector_tstamp) = date(T2.root_tstamp)
);

INSERT INTO clk_strm_sp.order_items_style (
	SELECT root_id,
       root_tstamp,
       T2.derived_tstamp,
       T2.etl_tstamp_local,
       outfit_id,
       gift_services,
       saved_for_later,
       store_pickup,
       product_rating,
       number_reviews,
       recommendation_percent,
       on_sale,
       brand_name,
       filter_used,
       search_term,
       sort_used,
       base_copy_split,
       true_fit,
       same_day_delivery,
       size,
       width,
       color,
       is_recognized,
       tag_id,
       T1.ti_sku
    FROM clk_strm_sp.events T1,
    clk_strm_sp.order_items T2
    WHERE T1.event = 'transaction_item'
    AND T1.event_id = T2.root_id
    AND date(T1.collector_tstamp) = date(T2.root_tstamp)
);

--pending successful transfer and QA:
ALTER TABLE clk_strm_sp.events rename to events_bak;
ALTER TABLE clk_strm_sp.events_sku rename to events;
DROP TABLE clk_strm_sp.events_bak;

ALTER TABLE clk_strm_sp.order_items rename to order_items_bak;
ALTER TABLE clk_strm_sp.order_items_style rename to order_items;
DROP TABLE clk_strm_sp.order_items_bak;