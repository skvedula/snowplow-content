-- copy-com-elwin-exposures.sql

DROP TABLE IF EXISTS duplicates.tmp_com_nordstrom_elwin_exposures; -- todo: replace placeholder name
DROP TABLE IF EXISTS duplicates.tmp_com_nordstrom_elwin_exposures_id; -- todo: replace placeholder name
DROP TABLE IF EXISTS duplicates.tmp_com_nordstrom_elwin_exposures_id_remaining; -- todo: replace placeholder name

-- (a) list all root_id that occur more than once in the target table

CREATE TABLE duplicates.tmp_com_nordstrom_elwin_exposures_id -- todo: replace placeholder name
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.com_nordstrom_elwin_exposures GROUP BY 1) WHERE count > 1); -- todo: replace placeholder name

-- (b) create a new table with these events and deduplicate as much as possible using GROUP BY

CREATE TABLE duplicates.tmp_com_nordstrom_elwin_exposures -- todo: replace placeholder name
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (

  SELECT

    schema_vendor,
    schema_name,
    schema_format,
    schema_version,

    root_id,
    MIN(root_tstamp), -- keep the earliest event
    ref_root,
    ref_tree,
    ref_parent,

       team_id,
       experiment_name,
       parameter_name,
       parameter_value,
       elwin_id

    -- todo: add all other columns

  FROM public.com_nordstrom_elwin_exposures -- todo: replace placeholder name
  WHERE root_id IN (SELECT root_id FROM duplicates.tmp_com_nordstrom_elwin_exposures_id) -- todo: replace placeholder name
  GROUP BY 1,2,3,4,5,7,8,9, 10,11,12,13,14 -- todo: add all remaining columns (except root_tstamp)

);

-- (c) delete the duplicates from the original table and insert the deduplicated rows

BEGIN;

  DELETE FROM public.com_nordstrom_elwin_exposures WHERE root_id IN (SELECT root_id FROM duplicates.tmp_com_nordstrom_elwin_exposures_id); -- todo: replace placeholder name
  INSERT INTO public.com_nordstrom_elwin_exposures (SELECT * FROM duplicates.tmp_com_nordstrom_elwin_exposures); -- todo: replace placeholder name

COMMIT;

-- (d) move remaining duplicates to another table (optional)

CREATE TABLE duplicates.tmp_com_nordstrom_elwin_exposures_id_remaining -- todo: replace placeholder name
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.com_nordstrom_elwin_exposures GROUP BY 1) WHERE count > 1); -- todo: replace placeholder name

BEGIN;

  INSERT INTO duplicates.com_nordstrom_elwin_exposures (SELECT * FROM public.com_nordstrom_elwin_exposures WHERE root_id IN (SELECT root_id FROM duplicates.tmp_com_nordstrom_elwin_exposures_id_remaining)); -- todo: replace placeholder name
  DELETE FROM public.com_nordstrom_elwin_exposures WHERE root_id IN (SELECT root_id FROM duplicates.tmp_com_nordstrom_elwin_exposures_id_remaining); -- todo: replace placeholder name

COMMIT;

-- (e) drop tables

DROP TABLE IF EXISTS duplicates.tmp_com_nordstrom_elwin_exposures; -- todo: replace placeholder name
DROP TABLE IF EXISTS duplicates.tmp_com_nordstrom_elwin_exposures_id; -- todo: replace placeholder name
DROP TABLE IF EXISTS duplicates.tmp_com_nordstrom_elwin_exposures_id_remaining; -- todo: replace placeholder name
