export default function spCreateConversionEventTag(event_id, type, category, pts, attrs) {
	if (!attrs) attrs = null;
	window.spCreateElementTag(event_id, category, attrs, pts);
}