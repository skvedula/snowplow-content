-- Version: 0.1
--
-- Requires atomic.events 0.7.0

-- (a) get all event_ids from most recent load to atomic.events so we can perform copy of all child tables based on that load

delete from atomic.tmp_root_ids;

-- DROP TABLE IF EXISTS atomic.tmp_root_ids;