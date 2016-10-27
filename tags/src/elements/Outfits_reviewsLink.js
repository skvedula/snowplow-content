import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_reviewsLink() {
	if (payload.action === window.nord.core.actions.ReviewSummaryViewReviews) {
		var attrArray=[];
		attrArray[16] = digitalData.outfit.styleNumber;
		attrArray[42] = payload.styleNumber;
		cmCreateElementTag('Reviews Link', 'Outfit Page', attrArray.join('-_-'));
		spCreateElementTag('Reviews Link', 'Outfit Page', attrArray.join('-_-'));
	}
}