-- deduplicate clk_strm_sp.engagement

DROP TABLE IF EXISTS clk_strm_sp.tmp_engagement_ids;

CREATE TABLE clk_strm_sp.tmp_engagement_ids  -- get all duplicate root_ids in clk_strm_sp.engagement
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM clk_strm_sp.engagement GROUP BY 1) WHERE count > 1);

DROP TABLE IF EXISTS clk_strm_sp.tmp_engagement;

CREATE TABLE clk_strm_sp.tmp_engagement       -- get full rows + duplicate number
 DISTKEY (root_id)
 SORTKEY (root_id)
AS (
 SELECT T1.root_id, 
   root_tstamp,
   T1.derived_tstamp,
   T1.etl_tstamp_local,
       category,
       action,
       label,
       value,
       wish_list,
       video_name,
       video_product_name,
       sku,
       number_of_recs,
       rec_strategy,
       filter_category,
       filter_value,
       video_state,
       video_timestamp,
       video_length,
       style_number,
       star_rating,
       reviews_size_select,
       reviews_age_select,
       reviews_sort_by,
       results_page,
       brand_name,
       number_of_images,
       number_of_videos,
       note_value,
       note_expire_date,
       applied_notes_total,
       available_notes_total,
       gift_card_total,
       gift_card_value,
       page_id,
       search_term,
       number_of_reviews,
       rms_sku,
       web_style_id,
       outfit_id,
       store_number,
ROW_NUMBER() OVER (PARTITION BY T1.root_id ORDER BY T1.derived_tstamp) as event_number
 FROM clk_strm_sp.engagement T1,
 clk_strm_sp.tmp_engagement_ids T2
 WHERE T1.root_id = T2.root_id
);

BEGIN;

 DELETE FROM clk_strm_sp.engagement  -- delete all dupes from clk_strm_sp.engagement
 WHERE root_id IN (SELECT root_id FROM clk_strm_sp.tmp_engagement_ids);

 INSERT INTO clk_strm_sp.engagement (             -- write only first occurrence back to clk_strm_sp.engagement
   SELECT root_id, 
   root_tstamp,
   derived_tstamp,
   etl_tstamp_local,
       category,
       action,
       label,
       value,
       wish_list,
       video_name,
       video_product_name,
       sku,
       number_of_recs,
       rec_strategy,
       filter_category,
       filter_value,
       video_state,
       video_timestamp,
       video_length,
       style_number,
       star_rating,
       reviews_size_select,
       reviews_age_select,
       reviews_sort_by,
       results_page,
       brand_name,
       number_of_images,
       number_of_videos,
       note_value,
       note_expire_date,
       applied_notes_total,
       available_notes_total,
       gift_card_total,
       gift_card_value,
       page_id,
       search_term,
       number_of_reviews,
       rms_sku,
       web_style_id,
       outfit_id,
       store_number
FROM clk_strm_sp.tmp_engagement WHERE event_number = 1
);

 DROP TABLE IF EXISTS clk_strm_sp.tmp_engagement_ids;
 DROP TABLE IF EXISTS clk_strm_sp.tmp_engagement;

COMMIT;