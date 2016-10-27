-- deduplicate public.order_items

DROP TABLE IF EXISTS duplicates.tmp_order_items;
DROP TABLE IF EXISTS duplicates.tmp_order_items_id;
DROP TABLE IF EXISTS duplicates.tmp_order_items_id_remaining;

-- (a) list all root_id that occur more than once in the target table

CREATE TABLE duplicates.tmp_order_items_id  -- get all duplicate event_ids in public.order_items
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.order_items GROUP BY 1) WHERE count > 1);

-- (b) create a new table with these events and deduplicate as much as possible using GROUP BY

CREATE TABLE duplicates.tmp_order_items         -- reduce dupes to single occurrence by grouping all columns
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (

  SELECT

    root_id,
    MIN(root_tstamp) as root_tstamp,
    MIN(derived_tstamp) as derived_tstamp, -- keep the earliest event
    etl_tstamp_local,

       outfit_id,
       gift_services,
       saved_for_later,
       store_pickup,
       product_rating,
       number_reviews,
       recommendation_percent,
       on_sale,
       brand_name,
       filter_used,
       search_term,
       sort_used,
       base_copy_split,
       true_fit,
       same_day_delivery,
       sku,
       size,
       width,
       color,
       is_recognized,
       tag_id

  FROM public.order_items
  WHERE root_id IN (SELECT root_id FROM duplicates.tmp_order_items_id)
  GROUP BY 1,4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25

);

-- (c) delete the duplicates from the original table and insert the deduplicated rows

BEGIN;

  DELETE FROM public.order_items WHERE root_id IN (SELECT root_id FROM duplicates.tmp_order_items_id); -- delete both copies of dupe
  INSERT INTO public.order_items (SELECT * FROM duplicates.tmp_order_items); -- write back only earliest occurrence

COMMIT;

-- (d) move remaining duplicates to another table (optional)

CREATE TABLE duplicates.tmp_order_items_id_remaining  -- 
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.order_items GROUP BY 1) WHERE count > 1);

BEGIN;

  INSERT INTO duplicates.order_items (SELECT * FROM public.order_items WHERE root_id IN (SELECT root_id FROM duplicates.tmp_order_items_id_remaining));
  DELETE FROM public.order_items WHERE root_id IN (SELECT root_id FROM duplicates.tmp_order_items_id_remaining);

COMMIT;

-- (e) drop tables

DROP TABLE IF EXISTS duplicates.tmp_order_items;
DROP TABLE IF EXISTS duplicates.tmp_order_items_id;
DROP TABLE IF EXISTS duplicates.tmp_order_items_id_remaining;
