export default function spLogError(e, tag_id) {
	try {
		snowplow('trackUnstructEvent', {
            schema: 'iglu:com.nordstrom/errors/jsonschema/1-0-0',
            data: {
                error: e.toString() + ': ' + navigator.userAgent,
                tag_id: tag_id || null,
                page_url: document.location.href
            }
        });
	}
	catch(e) {
		console.warn(e);
	}
}