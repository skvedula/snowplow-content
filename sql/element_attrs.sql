--atomic.com_nordstrom_element_attrs_0

CREATE TABLE atomic.com_nordstrom_element_attrs_0 (
	-- Schema of this type
	schema_vendor   		varchar(128)  	encode runlength not null,
	schema_name     		varchar(128)  	encode runlength not null,
	schema_format   		varchar(128)  	encode runlength not null,
	schema_version  		varchar(128)  	encode runlength not null,
	-- Parentage of this type
	root_id         		char(36)      	encode raw not null,
	root_tstamp     		timestamp     	encode raw not null,
	ref_root        		varchar(255)  	encode runlength not null,
	ref_tree        		varchar(1500) 	encode runlength not null,
	ref_parent      		varchar(255)  	encode runlength not null,
	-- Properties of this type
	wish_list 		   		varchar(1)  	encode text32k,
	video_name 		   		varchar(255)	encode text32k,
	video_product_name		varchar(255)	encode text32k,
	sku 					varchar(255)	encode text32k,
	number_of_recs 			smallint,
	rec_strategy			varchar(255)	encode text32k,
	filter_category			varchar(255)	encode text32k,
	filter_value			varchar(255)	encode text32k,
	video_state 			varchar(10)		encode text32k,
	video_timestamp			varchar(5)		encode text32k,
	video_length			varchar(5)		encode text32k,
	style_number			varchar(255)	encode text32k,
	star_rating				numeric(4),
	reviews_size_select		varchar(255)	encode text32k,
	reviews_age_select		varchar(255)	encode text32k,
	reviews_sort_by			varchar(255)	encode text32k,
	results_page			smallint,
	brand_name				varchar(255)	encode text32k,
	number_of_images		smallint,
	number_of_videos		smallint,
	note_value				numeric(15,2),
	note_expire_date		date,
	applied_notes_total		numeric(15,2),
	available_notes_total	numeric(15,2),
	gift_card_total			numeric(15,2),
	gift_card_value			numeric(15,2),
	page_id					varchar(255)	encode text32k,
	search_term				varchar(255)	encode text32k,
	number_of_reviews		smallint,
	rms_sku					varchar(255)	encode text32k,
	web_style_id			varchar(255)	encode text32k,
	outfit_id				varchar(255)	encode text32k,
	store_number			smallint,
	FOREIGN KEY(root_id) REFERENCES atomic.events(event_id)
)
DISTSTYLE KEY
-- Optimized join to atomic.events
DISTKEY (root_id)
SORTKEY (root_tstamp);