import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_reviewsLink(payload, attrs) {
	if (payload.action === window.nord.core.actions.ReviewSummaryViewReviews) {
		cmCreateElementTag('Reviews Link', 'Outfit Page', attrs);
		spCreateElementTag('Reviews Link', 'Outfit Page', attrs);
	}
}