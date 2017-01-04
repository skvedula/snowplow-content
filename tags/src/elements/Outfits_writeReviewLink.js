import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_writeReviewLink(payload, attrs) {
	if (payload.action === window.nord.core.actions.ReviewSummaryWriteReview) {
		cmCreateElementTag('Write a review link', 'Outfit Page', attrs);
		spCreateElementTag('Write a review link', 'Outfit Page', attrs);
	}
}