-- nordstrom-elwin_exposures.sql
-- Version: 1.0
--
-- Requires atomic.events 0.8.0

-- (a) get all events that are in atomic but not yet in public

INSERT INTO public.com_nordstrom_elwin_exposures (

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
       team_id,
       experiment_name,
       parameter_name,
       parameter_value,
       elwin_id
FROM atomic.com_nordstrom_elwin_exposures_1    T1,
scratchpad.event_id    T2
      WHERE T1.root_id = T2.event_id

);