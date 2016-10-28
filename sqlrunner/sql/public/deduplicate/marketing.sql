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
 SELECT T1.root_id, 
   root_tstamp,
   T1.derived_tstamp,
   T1.etl_tstamp_local,
       T1.mkt_source,
       T1.mkt_medium,
       T1.mkt_campaign,
       T1.mkt_term,
       T1.mkt_content,
       mkt_cm_camp_name,
       mkt_cm_camp_uid,
       mkt_rkg_id,
       mkt_linkshare_siteid,
       mkt_cm_em,
ROW_NUMBER() OVER (PARTITION BY root_id ORDER BY derived_tstamp) as event_number
 FROM public.marketing T1,
 duplicates.tmp_marketing_ids T2
 WHERE T1.root_id = T2.root_id
);

BEGIN;

 DELETE FROM public.marketing  -- delete all dupes from public.marketing
 WHERE root_id IN (SELECT root_id FROM duplicates.tmp_marketing_ids);

 INSERT INTO public.marketing (             -- write only first occurrence back to public.marketing
   SELECT root_id, 
   root_tstamp,
   derived_tstamp,
   etl_tstamp_local,
       mkt_source,
       mkt_medium,
       mkt_campaign,
       mkt_term,
       mkt_content,
       mkt_cm_camp_name,
       mkt_cm_camp_uid,
       mkt_rkg_id,
       mkt_linkshare_siteid,
       mkt_cm_em
 FROM duplicates.tmp_marketing WHERE event_number = 1
);

  INSERT INTO duplicates.marketing (  -- write remaining to duplicates.marketing
   SELECT root_id, 
   root_tstamp,
   derived_tstamp,
   etl_tstamp_local,
       mkt_source,
       mkt_medium,
       mkt_campaign,
       mkt_term,
       mkt_content,
       mkt_cm_camp_name,
       mkt_cm_camp_uid,
       mkt_rkg_id,
       mkt_linkshare_siteid,
       mkt_cm_em
 FROM duplicates.tmp_marketing WHERE event_number > 1
  );

COMMIT;