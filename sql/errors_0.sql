CREATE TABLE atomic.com_nordstrom_errors_0 (
	-- Schema of this type
	schema_vendor   varchar(128)  encode runlength not null,
	schema_name     varchar(128)  encode runlength not null,
	schema_format   varchar(128)  encode runlength not null,
	schema_version  varchar(128)  encode runlength not null,
	-- Parentage of this type
	root_id         char(36)      encode raw not null,
	root_tstamp     timestamp     encode raw not null,
	ref_root        varchar(255)  encode runlength not null,
	ref_tree        varchar(1500) encode runlength not null,
	ref_parent      varchar(255)  encode runlength not null,
	-- Properties of this type
	error 			varchar(2000)  encode text32k,
	tag_id 			varchar(10)   encode text32k,
	page_url 		varchar(2000) encode text32k,
	FOREIGN KEY(root_id) REFERENCES atomic.events(event_id)
)
DISTSTYLE KEY
-- Optimized join to atomic.events
DISTKEY (root_id)
SORTKEY (root_tstamp);