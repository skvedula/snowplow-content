export default function spLogError(e) {
	try {
		snowplow('trackUnstructEvent', {
            schema: 'iglu:com.nordstrom/errors/jsonschema/1-0-0',
            data: {
                error: e.toString() + ': ' + navigator.userAgent,
                tag_id: tag_id,
                page_url: document.location.href
            }
        });
	}
	catch(e) {
		console.warn(e);
	}
}