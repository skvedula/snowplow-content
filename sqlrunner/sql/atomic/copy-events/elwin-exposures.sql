-- copy-events/elwin_exposures.sql
-- Version: 1.0
--
-- Requires atomic.events 0.8.0

-- (a) get all events that are in atomic but not yet in public

INSERT INTO public.elwin_exposures (

    SELECT root_id,
       convert_timezone('US/Pacific', root_tstamp),
       convert_timezone('US/Pacific', derived_tstamp),
       team_id,
       experiment_name,
       parameter_name,
       parameter_value,
       elwin_id
FROM atomic.com_nordstrom_elwin_exposures_1    T1,
atomic.temp_event_ids    T2
      WHERE T1.root_id = T2.event_id
      AND T1.root_tstamp = T2.collector_tstamp

);