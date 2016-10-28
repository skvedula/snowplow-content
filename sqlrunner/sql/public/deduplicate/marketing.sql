-- deduplicate public.marketing

DROP TABLE IF EXISTS duplicates.tmp_marketing_ids;

CREATE TABLE duplicates.tmp_marketing_ids  -- get all duplicate root_ids in public.marketing
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.marketing GROUP BY 1) WHERE count > 1);

DROP TABLE IF EXISTS duplicates.tmp_marketing;

CREATE TABLE duplicates.tmp_marketing       -- get full rows + duplicate number
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (
 SELECT *, ROW_NUMBER() OVER (PARTITION BY root_id ORDER BY derived_tstamp) as event_number
 FROM public.marketing T1,
 duplicates.tmp_marketing_ids T2
 WHERE T1.root_id = T2.root_id
);

BEGIN;

 DELETE FROM public.marketing  -- delete all dupes from public.marketing
 WHERE root_id IN (SELECT root_id FROM duplicates.tmp_marketing_ids);

 INSERT INTO public.marketing (             -- write only first occurrence back to public.marketing
   SELECT * FROM duplicates.tmp_marketing WHERE event_number = 1
);

  INSERT INTO duplicates.marketing (  -- write remaining to duplicates.marketing
   SELECT * FROM duplicates.tmp_marketing WHERE event_number > 1
  );

COMMIT;