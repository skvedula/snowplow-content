-- deduplicate public.elwin_exposures

DROP TABLE IF EXISTS duplicates.tmp_elwin_exposures_ids;

CREATE TABLE duplicates.tmp_elwin_exposures_ids  -- get all duplicate root_ids in public.elwin_exposures
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.elwin_exposures GROUP BY 1) WHERE count > 1);

DROP TABLE IF EXISTS duplicates.tmp_elwin_exposures;

DROP TABLE IF EXISTS duplicates.tmp_elwin_exposures;

CREATE TABLE duplicates.tmp_elwin_exposures       -- get full rows + duplicate number
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (
 SELECT T1.root_id, 
   root_tstamp,
   T1.derived_tstamp,
   T1.etl_tstamp_local,

   team_id,
   experiment_name,
   parameter_name,
   parameter_value,
   elwin_id,
	
	ROW_NUMBER() OVER (PARTITION BY T1.root_id ORDER BY T1.derived_tstamp) as event_number

 FROM public.elwin_exposures T1,
 duplicates.tmp_elwin_exposures_ids T2
 WHERE T1.root_id = T2.root_id
);

BEGIN;

 DELETE FROM public.elwin_exposures  -- delete all dupes from public.elwin_exposures
 WHERE root_id IN (SELECT root_id FROM duplicates.tmp_elwin_exposures_ids);

 INSERT INTO public.elwin_exposures (             -- write only first occurrence back to public.elwin_exposures
   SELECT root_id, 
   root_tstamp,
   derived_tstamp,
   etl_tstamp_local,

   team_id,
   experiment_name,
   parameter_name,
   parameter_value,
   elwin_id
   FROM duplicates.tmp_elwin_exposures WHERE event_number = 1
);

  INSERT INTO duplicates.elwin_exposures (  -- write remaining to duplicates.elwin_exposures
   SELECT root_id, 
   root_tstamp,
   derived_tstamp,
   etl_tstamp_local,

   team_id,
   experiment_name,
   parameter_name,
   parameter_value,
   elwin_id

   FROM duplicates.tmp_elwin_exposures WHERE event_number > 1
  );

COMMIT;