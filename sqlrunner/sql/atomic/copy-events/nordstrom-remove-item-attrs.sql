-- nordstrom-remove-item-attrs.sql
-- Version: 1.0
--
-- Requires atomic.events 0.8.0

-- (a) get all events that are in atomic.events but not yet in public.events and perform time zone conversion

INSERT INTO public.com_nordstrom_remove_item_attrs (

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
FROM atomic.com_nordstrom_remove_item_attrs_0    T1,
scratchpad.event_id    T2
      WHERE T1.root_id = T2.event_id

);

INSERT INTO public.com_nordstrom_remove_item_attrs (

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
FROM atomic.com_nordstrom_remove_item_attrs_1    T1,
scratchpad.event_id    T2
      WHERE T1.root_id = T2.event_id

);