CREATE TABLE atomic.com_nordstrom_add_item_attrs_0 (
	-- Schema of this type
	schema_vendor			varchar(128)  	encode runlength not null,
	schema_name				varchar(128)  	encode runlength not null,
	schema_format			varchar(128)  	encode runlength not null,
	schema_version			varchar(128)  	encode runlength not null,
	-- Parentage of this type
	root_id					char(36)      	encode raw not null,
	root_tstamp				timestamp     	encode raw not null,
	ref_root				varchar(255)  	encode runlength not null,
	ref_tree				varchar(1500) 	encode runlength not null,
	ref_parent				varchar(255)  	encode runlength not null,
	-- Properties of this type
	document_url			varchar(2000) 	encode text32k,
	style_number			varchar(20)		encode text32k,
	style_id 				varchar(20)		encode text32k,
	size	 				varchar(20)		encode text32k,
	width	 				varchar(20)		encode text32k,
	color	 				varchar(20)		encode text32k,
	percentage_off			smallint,
	sale_type				varchar(1)		encode text32k,
	authenticated_status	varchar(10)		encode text32k,
	bopus					varchar(1)		encode text32k,
	store_number			varchar(4)		encode text32k,
	mmp 					varchar(1)		encode text32k,
	experiment_id			varchar(255)	encode text32k,
	experiment_data			varchar(1000)	encode text32k,
	tag_id					varchar(10)		encode text32k,
	FOREIGN KEY(root_id) REFERENCES atomic.events(event_id)
)
DISTSTYLE KEY
-- Optimized join to atomic.events
DISTKEY (root_id)
SORTKEY (root_tstamp);