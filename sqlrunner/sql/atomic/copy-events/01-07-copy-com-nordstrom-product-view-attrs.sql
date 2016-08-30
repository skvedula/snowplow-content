-- 01-07-copy-com-nordstrom-product-view-attrs.sql
-- Version: 0.1
--
-- Requires atomic.events 0.7.0

-- (a) get all events that are in atomic.events but not yet in public.events and stage for time zone conversion

-- DROP TABLE IF EXISTS atomic.tmp_com_nordstrom_product_view_attrs_0;

-- CREATE TABLE atomic.tmp_com_nordstrom_product_view_attrs_0
--   DISTKEY (root_id)
--   SORTKEY (root_id) 
-- AS (SELECT * FROM atomic.com_nordstrom_product_view_attrs_0 WHERE root_id IN (SELECT event_id FROM atomic.tmp_root_ids));

-- (b) perform time zone conversion on insert into public.events

INSERT INTO public.com_nordstrom_product_view_attrs (

    SELECT schema_vendor,
       schema_name,
       schema_format,
       schema_version,
       root_id,
       convert_timezone('US/Pacific', root_tstamp),
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
FROM atomic.com_nordstrom_product_view_attrs_0
      WHERE root_id IN (SELECT event_id FROM atomic.tmp_root_ids)

);

INSERT INTO public.com_nordstrom_product_view_attrs (

    SELECT schema_vendor,
       schema_name,
       schema_format,
       schema_version,
       root_id,
       convert_timezone('US/Pacific', root_tstamp),
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
FROM atomic.com_nordstrom_product_view_attrs_1
      WHERE root_id IN (SELECT event_id FROM atomic.tmp_root_ids)

);

-- DROP TABLE IF EXISTS atomic.tmp_com_nordstrom_product_view_attrs_0;

--       convert_timezone('US/Pacific', root_tstamp)