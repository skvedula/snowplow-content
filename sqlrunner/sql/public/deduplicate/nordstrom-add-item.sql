-- deduplicate public.nordstrom_add_item

DROP TABLE IF EXISTS duplicates.tmp_nordstrom_add_item_ids;

CREATE TABLE duplicates.tmp_nordstrom_add_item_ids  -- get all duplicate root_ids in public.nordstrom_add_item
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.nordstrom_add_item GROUP BY 1) WHERE count > 1);

DROP TABLE IF EXISTS duplicates.tmp_nordstrom_add_item;

CREATE TABLE duplicates.tmp_nordstrom_add_item       -- get full rows + duplicate number
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (
 SELECT *, ROW_NUMBER() OVER (PARTITION BY root_id ORDER BY derived_tstamp) as event_number
 FROM public.nordstrom_add_item T1,
 duplicates.tmp_nordstrom_add_item_ids T2
 WHERE T1.root_id = T2.root_id
);

BEGIN;

 DELETE FROM public.nordstrom_add_item  -- delete all dupes from public.nordstrom_add_item
 WHERE root_id IN (SELECT root_id FROM duplicates.tmp_nordstrom_add_item_ids);

 INSERT INTO public.nordstrom_add_item (             -- write only first occurrence back to public.nordstrom_add_item
   SELECT * FROM duplicates.tmp_nordstrom_add_item WHERE event_number = 1
);

  INSERT INTO duplicates.nordstrom_add_item (  -- write remaining to duplicates.nordstrom_add_item
   SELECT * FROM duplicates.tmp_nordstrom_add_item WHERE event_number > 1
  );

COMMIT;