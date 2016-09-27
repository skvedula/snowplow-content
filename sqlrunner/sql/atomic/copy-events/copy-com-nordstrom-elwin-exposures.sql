-- copy-com-nordstrom-elwin_exposures.sql
-- Version: 0.1
--
-- Requires atomic.events 0.7.0

-- (a) get all events that are in atomic but not yet in public

INSERT INTO public.com_nordstrom_elwin_exposures (

    SELECT schema_vendor,
       schema_name,
       schema_format,
       schema_version,
       root_id,
       convert_timezone('US/Pacific', root_tstamp),
       ref_root,
       ref_tree,
       ref_parent,
       team_id,
       experiment_name,
       parameter_name,
       parameter_value,
       elwin_id
FROM atomic.com_nordstrom_elwin_exposures_1
      WHERE root_id IN (SELECT event_id FROM atomic.tmp_root_ids)

);