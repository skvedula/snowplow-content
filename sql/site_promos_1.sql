CREATE TABLE atomic.com_nordstrom_site_promos_1 (
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
	promotion_type		varchar(255)  encode lzo not null,
	promotion			varchar(255)  encode lzo,
	link				varchar(255)  encode lzo,
	FOREIGN KEY(root_id) REFERENCES atomic.events(event_id)
)
DISTSTYLE KEY
-- Optimized join to atomic.events
DISTKEY (root_id)
SORTKEY (root_tstamp);