--duplicates.events

-- Create the schema
CREATE SCHEMA duplicates;

-- Create events table
CREATE TABLE duplicates.events (
	-- App
	app_id varchar(255) encode lzo,
	platform varchar(255) encode lzo,
	-- Date/time
	etl_tstamp timestamp encode lzo,
	collector_tstamp timestamp not null encode lzo,
	dvce_created_tstamp timestamp encode lzo,
	-- Event
	event varchar(128) encode lzo,
	event_id char(36) encode lzo not null unique,
	txn_id int encode lzo,
	-- Namespacing and versioning
	name_tracker varchar(128) encode lzo,
	v_tracker varchar(100) encode lzo,
	v_collector varchar(100) encode runlength not null,
	v_etl varchar(100) encode runlength not null,
	-- User and visit
	user_id varchar(255) encode lzo,
	user_ipaddress varchar(45) encode lzo,
	user_fingerprint varchar(50) encode lzo,
	domain_userid varchar(36) encode lzo,
	domain_sessionidx smallint encode lzo,
	network_userid varchar(38) encode lzo,
	-- Location
	geo_country char(2) encode lzo,
	geo_region char(2) encode lzo,
	geo_city varchar(75) encode lzo,
	geo_zipcode varchar(15) encode lzo,
	geo_latitude double precision encode raw,
	geo_longitude double precision encode raw,
	geo_region_name varchar(100) encode lzo,
	-- IP lookups
	ip_isp varchar(100) encode lzo,
	ip_organization varchar(100) encode lzo,
	ip_domain varchar(100) encode lzo,
	ip_netspeed varchar(100) encode lzo,
	-- Page
	page_url varchar(4096) encode lzo,
	page_title varchar(2000) encode lzo,
	page_referrer varchar(4096) encode lzo,
	-- Page URL components
	page_urlscheme varchar(16) encode lzo,
	page_urlhost varchar(255) encode lzo,
	page_urlport int encode lzo,
	page_urlpath varchar(3000) encode lzo,
	page_urlquery varchar(6000) encode lzo,
	page_urlfragment varchar(3000) encode lzo,
	-- Referrer URL components
	refr_urlscheme varchar(16) encode lzo,
	refr_urlhost varchar(255) encode lzo,
	refr_urlport int encode lzo,
	refr_urlpath varchar(6000) encode lzo,
	refr_urlquery varchar(6000) encode lzo,
	refr_urlfragment varchar(3000) encode lzo,
	-- Referrer details
	refr_medium varchar(25) encode lzo,
	refr_source varchar(50) encode lzo,
	refr_term varchar(255) encode lzo,
	-- Marketing
	mkt_medium varchar(255) encode lzo,
	mkt_source varchar(255) encode lzo,
	mkt_term varchar(255) encode lzo,
	mkt_content varchar(500) encode lzo,
	mkt_campaign varchar(255) encode lzo,
	-- Custom structured event
	se_category varchar(1000) encode lzo,
	se_action varchar(1000) encode lzo,
	se_label varchar(1000) encode lzo,
	se_property varchar(1000) encode lzo,
	se_value double precision encode raw,
	-- Ecommerce
	tr_orderid varchar(255) encode lzo,
	tr_affiliation varchar(255) encode lzo,
	tr_total dec(18,2) encode lzo,
	tr_tax dec(18,2) encode lzo,
	tr_shipping dec(18,2) encode lzo,
	tr_city varchar(255) encode lzo,
	tr_state varchar(255) encode lzo,
	tr_country varchar(255) encode lzo,
	ti_orderid varchar(255) encode lzo,
	ti_sku varchar(255) encode lzo,
	ti_name varchar(255) encode lzo,
	ti_category varchar(255) encode lzo,
	ti_price dec(18,2) encode lzo,
	ti_quantity int encode lzo,
	-- Page ping
	pp_xoffset_min integer encode lzo,
	pp_xoffset_max integer encode lzo,
	pp_yoffset_min integer encode lzo,
	pp_yoffset_max integer encode lzo,
	-- User Agent
	useragent varchar(1000) encode lzo,
	-- Browser
	br_name varchar(50) encode lzo,
	br_family varchar(50) encode lzo,
	br_version varchar(50) encode lzo,
	br_type varchar(50) encode lzo,
	br_renderengine varchar(50) encode lzo,
	br_lang varchar(255) encode lzo,
	br_features_pdf boolean encode runlength,
	br_features_flash boolean encode runlength,
	br_features_java boolean encode runlength,
	br_features_director boolean encode runlength,
	br_features_quicktime boolean encode runlength,
	br_features_realplayer boolean encode runlength,
	br_features_windowsmedia boolean encode runlength,
	br_features_gears boolean encode runlength,
	br_features_silverlight boolean encode runlength,
	br_cookies boolean encode runlength,
	br_colordepth varchar(12) encode lzo,
	br_viewwidth integer encode delta32k,
	br_viewheight integer encode delta32k,
	-- Operating System
	os_name varchar(50) encode lzo,
	os_family varchar(50) encode lzo,
	os_manufacturer varchar(50) encode lzo,
	os_timezone varchar(255) encode lzo,
	-- Device/Hardware
	dvce_type varchar(50) encode lzo,
	dvce_ismobile boolean encode runlength,
	dvce_screenwidth integer encode delta32k,
	dvce_screenheight integer encode delta32k,
	-- Document
	doc_charset varchar(128) encode lzo,
	doc_width integer encode delta32k,
	doc_height integer encode delta32k,

	-- Currency
	tr_currency char(3) encode lzo,
	tr_total_base dec(18, 2) encode lzo,
	tr_tax_base dec(18, 2) encode lzo,
	tr_shipping_base dec(18, 2) encode lzo,
	ti_currency char(3) encode lzo,
	ti_price_base dec(18, 2) encode lzo,
	base_currency char(3) encode lzo,

	-- Geolocation
	geo_timezone varchar(64) encode lzo,

	-- Click ID
	mkt_clickid varchar(128) encode lzo,
	mkt_network varchar(64) encode lzo,

	-- ETL tags
	etl_tags varchar(500) encode lzo,

	-- Time event was sent
	dvce_sent_tstamp timestamp encode lzo,

	-- Referer
	refr_domain_userid varchar(36) encode lzo,
	refr_dvce_tstamp timestamp encode lzo,

	-- Session ID
	domain_sessionid char(36) encode lzo,

	-- Derived timestamp
	derived_tstamp timestamp encode lzo,

	-- Event schema
	event_vendor varchar(1000) encode lzo,
	event_name varchar(1000) encode lzo,
	event_format varchar(128) encode lzo,
	event_version varchar(128) encode lzo,

	-- Event fingerprint
	event_fingerprint varchar(128) encode lzo,

	-- True timestamp
	true_tstamp timestamp encode lzo,
	etl_tstamp_local timestamp encode lzo,

	CONSTRAINT event_id_080_pk_duplicates PRIMARY KEY(event_id)
)
DISTSTYLE KEY
DISTKEY (event_id)
SORTKEY (derived_tstamp);

COMMENT ON TABLE "duplicates"."events" IS '0.8.0';

ALTER TABLE duplicates.events owner to storageloader;


--duplicates.elwin_exposures

CREATE TABLE duplicates.elwin_exposures (
	-- Parentage of this type
	root_id         	char(36)      encode raw not null,
	root_tstamp     	timestamp     encode raw not null,
	derived_tstamp  	timestamp     encode raw not null,
	etl_tstamp_local 	timestamp 	  encode raw not null,
	-- Properties of this type
	team_id				varchar(255)	encode lzo,
	experiment_name		varchar(255)	encode lzo,
	parameter_name		varchar(255)	encode lzo,
	parameter_value		varchar(255)	encode lzo,
	elwin_id			varchar(255)	encode lzo,
	FOREIGN KEY(root_id) REFERENCES duplicates.events(event_id)
)
DISTSTYLE KEY
-- Optimized join to duplicates.events
DISTKEY (root_id)
SORTKEY (derived_tstamp);

ALTER TABLE duplicates.elwin_exposures owner to storageloader;


--duplicates.link_clicks

CREATE TABLE duplicates.link_clicks (
	-- Parentage of this type
	root_id         	char(36)      encode raw not null,
	root_tstamp     	timestamp     encode raw not null,
	derived_tstamp  	timestamp     encode raw not null,
	etl_tstamp_local 	timestamp 	  encode raw not null,
	-- Properties of this type
	element_id      	varchar(255)  encode text32k,
	element_classes 	varchar(2048) encode raw, -- Holds a JSON array. TODO: will replace with a ref_ following https://github.com/snowplow/snowplow/issues/647
	element_target  	varchar(255)  encode text255,
	target_url      	varchar(4096) encode text32k not null,
	FOREIGN KEY(root_id) REFERENCES duplicates.events(event_id)
)
DISTSTYLE KEY
-- Optimized join to duplicates.events
DISTKEY (root_id)
SORTKEY (derived_tstamp);

ALTER TABLE duplicates.link_clicks owner to storageloader;


--duplicates.marketing

CREATE TABLE duplicates.marketing (
	-- Parentage of this type
	root_id				char(36)      encode raw not null,
	root_tstamp			timestamp     encode raw not null,
	derived_tstamp  	timestamp     encode raw not null,
	etl_tstamp_local	timestamp 	  encode raw not null,
    --Properties of this type 
    mkt_source varchar(255)  encode lzo,
    mkt_medium varchar(255)  encode lzo,
    mkt_campaign varchar(255)  encode lzo,
    mkt_term varchar(255)  encode lzo,
    mkt_content varchar(255)  encode lzo,
    mkt_cm_camp_name varchar(255)  encode lzo,
    mkt_cm_camp_uid varchar(255)  encode lzo,
    mkt_rkg_id varchar(255)  encode lzo,
    mkt_linkshare_siteid varchar(255)  encode lzo,
    mkt_cm_em varchar(255)  encode lzo, 
    FOREIGN KEY(root_id) REFERENCES duplicates.events(event_id)
)
DISTSTYLE KEY
--Optimized join to duplicates.events
DISTKEY(root_id)
SORTKEY(derived_tstamp);

ALTER TABLE duplicates.marketing owner to storageloader;


--duplicates.nordstrom_add_item

CREATE TABLE duplicates.nordstrom_add_item (
	-- Parentage of this type
	root_id					char(36)      	encode lzo not null,
	root_tstamp				timestamp     	encode raw not null,
	derived_tstamp  		timestamp     	encode raw not null,
	etl_tstamp_local 		timestamp 		encode raw not null,
	-- Properties of this type
	document_url			varchar(2000) 	encode lzo,
	style_number			varchar(20)		encode lzo,
	style_id 				varchar(20)		encode lzo,
	size	 				varchar(20)		encode bytedict,
	width	 				varchar(20)		encode lzo,
	color	 				varchar(20)		encode text255,
	percentage_off			smallint		encode delta,
	sale_type				varchar(1)		encode lzo,
	authenticated_status	varchar(10)		encode lzo,
	bopus					varchar(1)		encode lzo,
	store_number			varchar(4)		encode lzo,
	mmp 					varchar(1)		encode lzo,
	experiment_id			varchar(255)	encode lzo,
	tag_id					varchar(10)		encode lzo,
	experiment_data			varchar(1000)	encode lzo,
	FOREIGN KEY(root_id) REFERENCES duplicates.events(event_id)
)
DISTSTYLE KEY
-- Optimized join to duplicates.events
DISTKEY (root_id)
SORTKEY (derived_tstamp);

ALTER TABLE duplicates.nordstrom_add_item owner to storageloader;


--duplicates.nordstrom_remove_item

CREATE TABLE duplicates.nordstrom_remove_item (
	-- Parentage of this type
	root_id					char(36)      	encode raw not null,
	root_tstamp				timestamp     	encode raw not null,
	derived_tstamp  		timestamp     	encode raw not null,
	etl_tstamp_local		timestamp 	    encode raw not null,
	-- Properties of this type
	document_url			varchar(2000) 	encode lzo,
	style_number			varchar(20)		encode lzo,
	style_id 				varchar(20)		encode lzo,
	size	 				varchar(20)		encode lzo,
	width	 				varchar(20)		encode lzo,
	color	 				varchar(20)		encode lzo,
	percentage_off			smallint,
	sale_type				varchar(1)		encode lzo,
	authenticated_status	varchar(10)		encode lzo,
	bopus					varchar(1)		encode lzo,
	store_number			varchar(4)		encode lzo,
	mmp 					varchar(1)		encode lzo,
	tag_id					varchar(10)	    encode lzo,
	experiment_id			varchar(255)	encode lzo,
	experiment_data			varchar(1000)	encode lzo,
	FOREIGN KEY(root_id) REFERENCES duplicates.events(event_id)
)
DISTSTYLE KEY
-- Optimized join to duplicates.events
DISTKEY (root_id)
SORTKEY (derived_tstamp);

ALTER TABLE duplicates.nordstrom_remove_item owner to storageloader;


--duplicates.order_items

CREATE TABLE duplicates.order_items (
	-- Parentage of this type
	root_id				char(36)      encode raw not null,
	root_tstamp			timestamp     encode raw not null,
	derived_tstamp  	timestamp     encode raw not null,
	etl_tstamp_local	timestamp 	  encode raw not null,
	-- Properties of this type
	outfit_id			varchar(255)  encode lzo,
	gift_services		varchar(255)  encode lzo,
	saved_for_later		varchar(255)  encode lzo,
	store_pickup		varchar(255)  encode lzo,
	product_rating		decimal(4),
	number_reviews		smallint,
	recommendation_percent	smallint,
	on_sale				varchar(6)    encode lzo,
	brand_name			varchar(255)  encode lzo,
	filter_used			varchar(255)  encode lzo,
	search_term			varchar(255)  encode lzo,
	sort_used			varchar(255)  encode lzo,
	base_copy_split		varchar(255)  encode lzo,
	true_fit			varchar(255)  encode lzo,
	same_day_delivery	varchar(255)  encode lzo,
	size				varchar(255)  encode lzo,
	width				varchar(255)  encode lzo,
	color				varchar(255)  encode text255,
	is_recognized		varchar(1)	  encode lzo,
	tag_id 				varchar(10)   encode lzo,
	style_number		varchar(10)   encode lzo,
	vendor_order_id		varchar(255)  encode lzo,
	FOREIGN KEY(root_id) REFERENCES duplicates.events(event_id)
)
DISTSTYLE KEY
-- Optimized join to duplicates.events
DISTKEY (root_id)
SORTKEY (derived_tstamp);

ALTER TABLE duplicates.order_items owner to storageloader;


--duplicates.page_views

CREATE TABLE duplicates.page_views (
	-- Parentage of this type
	root_id         		char(36)      	encode raw not null,
	root_tstamp     		timestamp     	encode raw not null,
	derived_tstamp  		timestamp     	encode raw not null,
	etl_tstamp_local		timestamp 	    encode raw not null,
	-- Properties of this type
	page_url				varchar(2000)	encode lzo,
	page_category   		varchar(255)  	encode lzo,
	page_template   		varchar(255)	encode lzo,
	style_number			varchar(10)		encode lzo,
	is_recognized			varchar(1)		encode lzo,
	search_term				varchar(255)	encode lzo,
	search_results_count	integer			encode delta,
	tag_id					varchar(10)		encode lzo,
	experiment_id			varchar(255)	encode lzo,
	experiment_data			varchar(1000)	encode lzo,
	FOREIGN KEY(root_id) REFERENCES duplicates.events(event_id)
)
DISTSTYLE KEY
-- Optimized join to duplicates.events
DISTKEY (root_id)
SORTKEY (derived_tstamp);

ALTER TABLE duplicates.page_views owner to storageloader;


--duplicates.product_views

CREATE TABLE duplicates.product_views (
	-- Parentage of this type
	root_id				char(36)      encode raw not null,
	root_tstamp			timestamp     encode raw not null,
	derived_tstamp  	timestamp     encode raw not null,
	etl_tstamp_local	timestamp 	  encode raw not null,
	-- Properties of this type
	page_url			varchar(2000)  encode lzo,
	product_id			varchar(255)  encode lzo,
	product_category	varchar(255)  encode lzo,
	style_number		varchar(255)  encode lzo,
	product_name		varchar(255)  encode lzo,
	on_sale				varchar(255)  encode lzo,
	brand_name			varchar(255)  encode lzo,
	fit_value			varchar(255)  encode lzo,
	rack				varchar(255)  encode lzo,
	available			varchar(255)  encode lzo,
	tag_id				varchar(10)	  encode lzo,
	FOREIGN KEY(root_id) REFERENCES duplicates.events(event_id)
)
DISTSTYLE KEY
-- Optimized join to duplicates.events
DISTKEY (root_id)
SORTKEY (derived_tstamp);

ALTER TABLE duplicates.product_views owner to storageloader;


--duplicates.real_estate

CREATE TABLE duplicates.real_estate (
	-- Parentage of this type
	root_id         	char(36)      encode raw not null,
	root_tstamp     	timestamp     encode raw not null,
	derived_tstamp  	timestamp     encode raw not null,
	etl_tstamp_local 	timestamp 	  encode raw not null,
	-- Properties of this type
	version      		varchar(255) encode lzo,
	page_area         	varchar(255) encode lzo,
	link   				varchar(255) encode lzo,
	FOREIGN KEY(root_id) REFERENCES duplicates.events(event_id)
)
DISTSTYLE KEY
-- Optimized join to duplicates.events
DISTKEY (root_id)
SORTKEY (derived_tstamp);

ALTER TABLE duplicates.real_estate owner to storageloader;


--duplicates.search

CREATE TABLE duplicates.search (
	-- Parentage of this type
	root_id         	char(36)      encode raw not null,
	root_tstamp     	timestamp     encode raw not null,
	derived_tstamp  	timestamp     encode raw not null,
	etl_tstamp_local 	timestamp 	  encode raw not null,
	-- Properties of this type
	terms           	varchar(2048) encode raw not null, -- Holds a JSON array. TODO: will replace with a ref_ following https://github.com/snowplow/snowplow/issues/647
	filters         	varchar(2048) encode raw, -- Holds a JSON object. TODO: will replace with a ref_ following https://github.com/snowplow/snowplow/issues/647
	total_results   	int encode raw,
	page_results    	int encode runlength,
	FOREIGN KEY(root_id) REFERENCES duplicates.events(event_id)
)
DISTSTYLE KEY
-- Optimized join to duplicates.events
DISTKEY (root_id)
SORTKEY (derived_tstamp);

ALTER TABLE duplicates.search owner to storageloader;


--duplicates.site_promos

CREATE TABLE duplicates.site_promos (
	-- Parentage of this type
	root_id         	char(36)      encode raw not null,
	root_tstamp     	timestamp     encode raw not null,
	derived_tstamp  	timestamp     encode raw not null,
	etl_tstamp_local 	timestamp 	  encode raw not null,
	-- Properties of this type
	promotion_type      varchar(255) encode lzo,
	promotion         	varchar(255) encode lzo,
	link   				varchar(255) encode lzo,
	FOREIGN KEY(root_id) REFERENCES duplicates.events(event_id)
)
DISTSTYLE KEY
-- Optimized join to duplicates.events
DISTKEY (root_id)
SORTKEY (derived_tstamp);

ALTER TABLE duplicates.site_promos owner to storageloader;


--duplicates.snowplow_add_to_cart

CREATE TABLE duplicates.snowplow_add_to_cart (
	-- Parentage of this type
	root_id         	char(36)      encode raw not null,
	root_tstamp     	timestamp     encode raw not null,
	derived_tstamp  	timestamp     encode raw not null,
	etl_tstamp_local 	timestamp 	  encode raw not null,
	-- Properties of this type
	sku             	varchar(255)  encode text32k not null,
	name            	varchar(255)  encode text32k,
	category        	varchar(255)  encode text32k,
	unit_price      	decimal(15,2) encode runlength,
	quantity        	int           encode runlength not null,
	currency        	varchar(31)   encode runlength,
	FOREIGN KEY(root_id) REFERENCES duplicates.events(event_id)
)
DISTSTYLE KEY
-- Optimized join to duplicates.events
DISTKEY (root_id)
SORTKEY (derived_tstamp);

ALTER TABLE duplicates.snowplow_add_to_cart owner to storageloader;


--duplicates.snowplow_remove_from_cart

CREATE TABLE duplicates.snowplow_remove_from_cart (
	-- Parentage of this type
	root_id         	char(36)      encode raw not null,
	root_tstamp     	timestamp     encode raw not null,
	derived_tstamp  	timestamp     encode raw not null,
	etl_tstamp_local 	timestamp 	  encode raw not null,
	-- Properties of this type
	sku             	varchar(255)  encode text32k not null,
	name            	varchar(255)  encode text32k,
	category        	varchar(255)  encode text32k,
	unit_price      	decimal(15,2) encode runlength,
	quantity        	int           encode runlength not null,
	currency        	varchar(31)   encode runlength,
	FOREIGN KEY(root_id) REFERENCES duplicates.events(event_id)
)
DISTSTYLE KEY
-- Optimized join to duplicates.events
DISTKEY (root_id)
SORTKEY (derived_tstamp);

ALTER TABLE duplicates.snowplow_remove_from_cart owner to storageloader;


--duplicates.timing

CREATE TABLE duplicates.timing (
	-- Parentage of this type
	root_id        		char(36)      encode raw not null,
	root_tstamp    		timestamp     encode raw not null,
	derived_tstamp 		timestamp     encode raw not null,
	etl_tstamp_local 	timestamp 	 encode raw not null,
	-- Properties of this type
	category       		varchar(255)  encode text255 not null,
	variable       		varchar(255)  encode text32k not null,
	timing         		integer       encode raw not null,
	label          		varchar(255)  encode text32k,
	FOREIGN KEY(root_id) REFERENCES duplicates.events(event_id)
)
DISTSTYLE KEY
-- Optimized join to duplicates.events
DISTKEY (root_id)
SORTKEY (derived_tstamp);

ALTER TABLE duplicates.timing owner to storageloader;


--duplicates.uids

CREATE TABLE duplicates.uids (
	-- Parentage of this type
	root_id        		char(36)      encode raw not null,
	root_tstamp    		timestamp     encode raw not null,
	derived_tstamp 		timestamp     encode raw not null,
	etl_tstamp_local 	timestamp 	  encode raw not null,
	-- Properties of this type
	domain_userid  		varchar(255)  encode lzo,
	shopper_id 			varchar(255)  encode lzo,
	coremetrics_id 		varchar(255)  encode lzo,
	adobe_id 			varchar(255)  encode lzo,
	elwin_id 			varchar(255)  encode lzo,
	maxymiser_id 		varchar(255)  encode lzo,
	authenticated 		varchar(1) 	  encode raw,
	FOREIGN KEY(root_id) REFERENCES duplicates.events(event_id)
)
DISTSTYLE KEY
-- Optimized join to duplicates.events
DISTKEY (root_id)
SORTKEY (derived_tstamp);

ALTER TABLE duplicates.uids owner to storageloader;
