-- 01-08-copy-com-nordstrom-remove-item-attrs.sql
-- Version: 0.1
--
-- Requires atomic.events 0.7.0

-- (a) get all events that are in atomic.events but not yet in public.events and stage for time zone conversion

-- DROP TABLE IF EXISTS atomic.tmp_com_nordstrom_remove_item_attrs_0;

-- CREATE TABLE atomic.tmp_com_nordstrom_remove_item_attrs_0
--   DISTKEY (root_id)
--   SORTKEY (root_id) 
-- AS (SELECT * FROM atomic.com_nordstrom_remove_item_attrs_0 WHERE root_id IN (SELECT event_id FROM atomic.tmp_root_ids));

-- (b) perform time zone conversion on insert into public.events

INSERT INTO public.com_nordstrom_remove_item_attrs (

    SELECT schema_vendor,
       schema_name,
       schema_format,
       schema_version,
       root_id,
       convert_timezone('US/Pacific', root_tstamp),
       ref_root,
       ref_tree,
       ref_parent,
       document_url,
       style_number,
       style_id,
       size,
       width,
       color,
       percentage_off,
       sale_type,
       authenticated_status,
       bopus,
       store_number,
       mmp,
       tag_id,
       experiment_id,
       experiment_data
FROM atomic.com_nordstrom_remove_item_attrs_0
      WHERE root_id IN (SELECT event_id FROM atomic.tmp_root_ids)

);

INSERT INTO public.com_nordstrom_remove_item_attrs (

    SELECT schema_vendor,
       schema_name,
       schema_format,
       schema_version,
       root_id,
       convert_timezone('US/Pacific', root_tstamp),
       ref_root,
       ref_tree,
       ref_parent,
       document_url,
       style_number,
       style_id,
       size,
       width,
       color,
       percentage_off,
       sale_type,
       authenticated_status,
       bopus,
       store_number,
       mmp,
       tag_id,
       experiment_id,
       experiment_data
FROM atomic.com_nordstrom_remove_item_attrs_1
      WHERE root_id IN (SELECT event_id FROM atomic.tmp_root_ids)

);

-- DROP TABLE IF EXISTS atomic.tmp_com_nordstrom_remove_item_attrs_0;

--       convert_timezone('US/Pacific', root_tstamp)