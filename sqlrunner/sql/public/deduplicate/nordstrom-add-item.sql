-- deduplicate public.nordstrom_add_item

DROP TABLE IF EXISTS duplicates.tmp_nordstrom_add_item;
DROP TABLE IF EXISTS duplicates.tmp_nordstrom_add_item_id;
DROP TABLE IF EXISTS duplicates.tmp_nordstrom_add_item_id_remaining;

-- (a) list all root_id that occur more than once in the target table

CREATE TABLE duplicates.tmp_nordstrom_add_item_id
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.nordstrom_add_item GROUP BY 1) WHERE count > 1);

-- (b) create a new table with these events and deduplicate as much as possible using GROUP BY

CREATE TABLE duplicates.tmp_nordstrom_add_item
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (

  SELECT

    root_id,
    MIN(root_tstamp) as root_tstamp,
    MIN(derived_tstamp) as derived_tstamp, -- keep the earliest event

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
       experiment_id,
       tag_id,
       experiment_data

  FROM public.nordstrom_add_item
  WHERE root_id IN (SELECT root_id FROM duplicates.tmp_nordstrom_add_item_id)
  GROUP BY 1, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18

);

-- (c) delete the duplicates from the original table and insert the deduplicated rows

BEGIN;

  DELETE FROM public.nordstrom_add_item WHERE root_id IN (SELECT root_id FROM duplicates.tmp_nordstrom_add_item_id);
  INSERT INTO public.nordstrom_add_item (SELECT * FROM duplicates.tmp_nordstrom_add_item);

COMMIT;

-- (d) move remaining duplicates to another table (optional)

CREATE TABLE duplicates.tmp_nordstrom_add_item_id_remaining
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.nordstrom_add_item GROUP BY 1) WHERE count > 1);

BEGIN;

  INSERT INTO duplicates.nordstrom_add_item (SELECT * FROM public.nordstrom_add_item WHERE root_id IN (SELECT root_id FROM duplicates.tmp_nordstrom_add_item_id_remaining));
  DELETE FROM public.nordstrom_add_item WHERE root_id IN (SELECT root_id FROM duplicates.tmp_nordstrom_add_item_id_remaining);

COMMIT;

-- (e) drop tables

DROP TABLE IF EXISTS duplicates.tmp_nordstrom_add_item;
DROP TABLE IF EXISTS duplicates.tmp_nordstrom_add_item_id;
DROP TABLE IF EXISTS duplicates.tmp_nordstrom_add_item_id_remaining;
