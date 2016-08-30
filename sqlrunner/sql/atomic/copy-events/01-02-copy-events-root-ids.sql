-- Version: 0.1
--
-- Requires atomic.events 0.7.0

-- (a) get all event_ids from most recent load to atomic.events so we can perform copy of all child tables based on that load

delete from atomic.tmp_root_ids;

insert into atomic.tmp_root_ids (select etl_tstamp, event_id FROM atomic.events WHERE etl_tstamp IN (SELECT max(etl_tstamp) FROM atomic.events));