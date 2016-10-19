-- deduplicate snowplow-add-to-cart.sql

DROP TABLE IF EXISTS duplicates.tmp_snowplow_remove_from_cart;
DROP TABLE IF EXISTS duplicates.tmp_snowplow_remove_from_cart_id;
DROP TABLE IF EXISTS duplicates.tmp_snowplow_remove_from_cart_id_remaining;

-- (a) list all root_id that occur more than once in the target table

CREATE TABLE duplicates.tmp_snowplow_remove_from_cart_id
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.snowplow_remove_from_cart GROUP BY 1) WHERE count > 1);

-- (b) create a new table with these events and deduplicate as much as possible using GROUP BY

CREATE TABLE duplicates.tmp_snowplow_remove_from_cart
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (

  SELECT

    root_id,
    MIN(root_tstamp), -- keep the earliest event
    MIN(derived_tstamp), -- keep the earliest event

       sku,
       name,
       category,
       unit_price,
       quantity,
       currency

  FROM public.snowplow_remove_from_cart
  WHERE root_id IN (SELECT root_id FROM duplicates.tmp_snowplow_remove_from_cart_id)
  GROUP BY 1, 4,5,6,7,8,9

);

-- (c) delete the duplicates from the original table and insert the deduplicated rows

BEGIN;

  DELETE FROM public.snowplow_remove_from_cart WHERE root_id IN (SELECT root_id FROM duplicates.tmp_snowplow_remove_from_cart_id);
  INSERT INTO public.snowplow_remove_from_cart (SELECT * FROM duplicates.tmp_snowplow_remove_from_cart);

COMMIT;

-- (d) move remaining duplicates to another table (optional)

CREATE TABLE duplicates.tmp_snowplow_remove_from_cart_id_remaining
  DISTKEY (root_id)
  SORTKEY (root_id)
AS (SELECT root_id FROM (SELECT root_id, COUNT(*) AS count FROM public.snowplow_remove_from_cart GROUP BY 1) WHERE count > 1);

BEGIN;

  INSERT INTO duplicates.snowplow_remove_from_cart (SELECT * FROM public.snowplow_remove_from_cart WHERE root_id IN (SELECT root_id FROM duplicates.tmp_snowplow_remove_from_cart_id_remaining));
  DELETE FROM public.snowplow_remove_from_cart WHERE root_id IN (SELECT root_id FROM duplicates.tmp_snowplow_remove_from_cart_id_remaining);

COMMIT;

-- (e) drop tables

DROP TABLE IF EXISTS duplicates.tmp_snowplow_remove_from_cart;
DROP TABLE IF EXISTS duplicates.tmp_snowplow_remove_from_cart_id;
DROP TABLE IF EXISTS duplicates.tmp_snowplow_remove_from_cart_id_remaining;
