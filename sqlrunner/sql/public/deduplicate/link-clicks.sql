-- deduplicate public.link_clicks

DROP TABLE IF EXISTS duplicates.tmp_link_clicks_ids;

CREATE TABLE duplicates.tmp_link_clicks_ids  -- get all duplicate root_ids in public.link_clicks
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.link_clicks GROUP BY 1) WHERE count > 1);

DROP TABLE IF EXISTS duplicates.tmp_link_clicks;

CREATE TABLE duplicates.tmp_link_clicks       -- get full rows + duplicate number
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (
 SELECT T1.root_id, 
   root_tstamp,
   T1.derived_tstamp,
   T1.etl_tstamp_local,

       element_id,
       element_classes,
       element_target,
       target_url,
	
	ROW_NUMBER() OVER (PARTITION BY T1.root_id ORDER BY T1.derived_tstamp) as event_number
 FROM public.link_clicks T1,
 duplicates.tmp_link_clicks_ids T2
 WHERE T1.root_id = T2.root_id
);

BEGIN;

 DELETE FROM public.link_clicks  -- delete all dupes from public.link_clicks
 WHERE root_id IN (SELECT root_id FROM duplicates.tmp_link_clicks_ids);

 INSERT INTO public.link_clicks (             -- write only first occurrence back to public.link_clicks
   SELECT root_id, 
   root_tstamp,
   derived_tstamp,
   etl_tstamp_local,

       element_id,
       element_classes,
       element_target,
       target_url
    FROM duplicates.tmp_link_clicks WHERE event_number = 1
);

  INSERT INTO duplicates.link_clicks (  -- write remaining to duplicates.link_clicks
   SELECT root_id, 
   root_tstamp,
   derived_tstamp,
   etl_tstamp_local,

       element_id,
       element_classes,
       element_target,
       target_url
     FROM duplicates.tmp_link_clicks WHERE event_number > 1
  );

COMMIT;