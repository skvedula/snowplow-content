/**
 * ShowMoreButton adds an event listener to the "show more" button on search
 * and browse pages. On click the button fires the appropriate coremetrics and
 * snowplow tags.
 */
const ShowMoreButton = () => {
	const selector = `#npr-product-results-page section.npr-product-gallery > footer > button`;
	const el = document.querySelector(selector)
	el.addEventListener('click', e => {
		cmCreateElementTag('ShowMoreClick', 'Search and Browse');
		spCreateElementTag('ShowMoreClick', 'Search and Browse');
	});
}

export default ShowMoreButton;
