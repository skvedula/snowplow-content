-- deduplicate elwin-exposures.sql

DROP TABLE IF EXISTS duplicates.tmp_elwin_exposures;
DROP TABLE IF EXISTS duplicates.tmp_elwin_exposures_id;
DROP TABLE IF EXISTS duplicates.tmp_elwin_exposures_id_remaining;

-- (a) list all root_id that occur more than once in the target table

CREATE TABLE duplicates.tmp_elwin_exposures_id
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.elwin_exposures GROUP BY 1) WHERE count > 1);

-- (b) create a new table with these events and deduplicate as much as possible using GROUP BY

CREATE TABLE duplicates.tmp_elwin_exposures
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (

  SELECT

    root_id,
    MIN(root_tstamp) as root_tstamp,
    MIN(derived_tstamp) as derived_tstamp, -- keep the earliest event
    etl_tstamp_local,

       team_id,
       experiment_name,
       parameter_name,
       parameter_value,
       elwin_id

  FROM public.elwin_exposures
  WHERE root_id IN (SELECT root_id FROM duplicates.tmp_elwin_exposures_id)
  GROUP BY 1,4, 5,6,7,8,9

);

-- (c) delete the duplicates from the original table and insert the deduplicated rows

BEGIN;

  DELETE FROM public.elwin_exposures WHERE root_id IN (SELECT root_id FROM duplicates.tmp_elwin_exposures_id);
  INSERT INTO public.elwin_exposures (SELECT * FROM duplicates.tmp_elwin_exposures);

COMMIT;

-- (d) move remaining duplicates to another table (optional)

CREATE TABLE duplicates.tmp_elwin_exposures_id_remaining
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.elwin_exposures GROUP BY 1) WHERE count > 1);

BEGIN;

  INSERT INTO duplicates.elwin_exposures (SELECT * FROM public.elwin_exposures WHERE root_id IN (SELECT root_id FROM duplicates.tmp_elwin_exposures_id_remaining));
  DELETE FROM public.elwin_exposures WHERE root_id IN (SELECT root_id FROM duplicates.tmp_elwin_exposures_id_remaining);

COMMIT;

-- (e) drop tables

DROP TABLE IF EXISTS duplicates.tmp_elwin_exposures;
DROP TABLE IF EXISTS duplicates.tmp_elwin_exposures_id;
DROP TABLE IF EXISTS duplicates.tmp_elwin_exposures_id_remaining;
