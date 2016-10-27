import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_writeReviewLink() {
	if (payload.action === window.nord.core.actions.ReviewSummaryWriteReview) {
		var attrArray=[];
		attrArray[16] = digitalData.outfit.styleNumber;
		attrArray[42] = payload.styleNumber;
		cmCreateElementTag('Write a review link', 'Outfit Page', attrArray.join('-_-'));
		spCreateElementTag('Write a review link', 'Outfit Page', attrArray.join('-_-'));
	}
}