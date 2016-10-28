-- deduplicate public.order_items

DROP TABLE IF EXISTS duplicates.tmp_order_items_ids;

CREATE TABLE duplicates.tmp_order_items_ids  -- get all duplicate root_ids in public.order_items
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.order_items GROUP BY 1) WHERE count > 1);

DROP TABLE IF EXISTS duplicates.tmp_order_items;

CREATE TABLE duplicates.tmp_order_items       -- get full rows + duplicate number
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (
 SELECT *, ROW_NUMBER() OVER (PARTITION BY root_id ORDER BY derived_tstamp) as event_number
 FROM public.order_items T1,
 duplicates.tmp_order_items_ids T2
 WHERE T1.root_id = T2.root_id
);

BEGIN;

 DELETE FROM public.order_items  -- delete all dupes from public.order_items
 WHERE root_id IN (SELECT root_id FROM duplicates.tmp_order_items_ids);

 INSERT INTO public.order_items (             -- write only first occurrence back to public.order_items
   SELECT * FROM duplicates.tmp_order_items WHERE event_number = 1
);

  INSERT INTO duplicates.order_items (  -- write remaining to duplicates.order_items
   SELECT * FROM duplicates.tmp_order_items WHERE event_number > 1
  );

COMMIT;