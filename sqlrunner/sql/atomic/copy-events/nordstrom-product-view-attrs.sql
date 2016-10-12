-- nordstrom-product-view-attrs.sql
-- Version: 1.0
--
-- Requires atomic.events 0.8.0

-- (a) get all events that are in atomic.events but not yet in public.events and perform time zone conversion

INSERT INTO public.com_nordstrom_product_view_attrs (

    SELECT schema_vendor,
       schema_name,
       schema_format,
       schema_version,
       root_id,
       convert_timezone('US/Pacific', root_tstamp),
       convert_timezone('US/Pacific', derived_tstamp),
       ref_root,
       ref_tree,
       ref_parent,
       page_url,
       product_id,
       product_category,
       style_number,
       product_name,
       on_sale,
       brand_name,
       fit_value,
       rack,
       available,
       tag_id
FROM atomic.com_nordstrom_product_view_attrs_0    T1,
scratchpad.event_id    T2
      WHERE T1.root_id = T2.event_id

);

INSERT INTO public.com_nordstrom_product_view_attrs (

    SELECT schema_vendor,
       schema_name,
       schema_format,
       schema_version,
       root_id,
       convert_timezone('US/Pacific', root_tstamp),
       convert_timezone('US/Pacific', derived_tstamp),
       ref_root,
       ref_tree,
       ref_parent,
       page_url,
       product_id,
       product_category,
       style_number,
       product_name,
       on_sale,
       brand_name,
       fit_value,
       rack,
       available,
       tag_id
FROM atomic.com_nordstrom_product_view_attrs_1    T1,
scratchpad.event_id    T2
      WHERE T1.root_id = T2.event_id

);