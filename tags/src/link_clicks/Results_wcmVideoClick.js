export default function Results_wcmVideoClick(url) {
	cmCreateManualLinkClickTag(url);
	snowplow('trackLinkCLick', url);
}