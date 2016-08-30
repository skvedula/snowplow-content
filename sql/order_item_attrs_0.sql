CREATE TABLE atomic.com_nordstrom_order_item_attrs_0 (
	-- Schema of this type
	schema_vendor		varchar(128)  encode runlength not null,
	schema_name			varchar(128)  encode runlength not null,
	schema_format		varchar(128)  encode runlength not null,
	schema_version		varchar(128)  encode runlength not null,
	-- Parentage of this type
	root_id				char(36)      encode raw not null,
	root_tstamp			timestamp     encode raw not null,
	ref_root			varchar(255)  encode runlength not null,
	ref_tree			varchar(1500) encode runlength not null,
	ref_parent			varchar(255)  encode runlength not null,
	-- Properties of this type
	outfit_id			varchar(255)  encode text32k,
	gift_services		varchar(255)  encode text32k,
	saved_for_later		varchar(255)  encode text32k,
	store_pickup		varchar(255)  encode text32k,
	product_rating		decimal(4),
	number_reviews		smallint,
	recommendation_percent	smallint,
	on_sale				varchar(6)    encode text32k,
	brand_name			varchar(255)  encode text32k,
	filter_used			varchar(255)  encode text32k,
	search_term			varchar(255)  encode text32k,
	sort_used			varchar(255)  encode text32k,
	base_copy_split		varchar(255)  encode text32k,
	true_fit			varchar(255)  encode text32k,
	same_day_delivery	varchar(255)  encode text32k,
	SKU 				varchar(255)  encode text32k,
	size				varchar(255)  encode text32k,
	width				varchar(255)  encode text32k,
	color				varchar(255)  encode text32k,
	is_recognized		varchar(1)  encode text32k,
	FOREIGN KEY(root_id) REFERENCES atomic.events(event_id)
)
DISTSTYLE KEY
-- Optimized join to atomic.events
DISTKEY (root_id)
SORTKEY (root_tstamp);