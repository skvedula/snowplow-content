BEGIN;

--create qa.sessions table
DROP TABLE IF EXISTS qa.sessions CASCADE;

CREATE TABLE qa.sessions
(
   min_tstamp  timestamp,
   visits      bigint
);


--copy from public.sessions
INSERT INTO qa.sessions (
	SELECT *
	FROM public.sessions
);


--drop public.sessions
DROP TABLE public.sessions CASCADE;

COMMIT;