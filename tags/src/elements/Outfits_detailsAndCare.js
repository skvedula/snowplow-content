import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_detailsAndCare() {
	if (payload.action === window.nord.core.actions.ProductDetailsAndCareLinkClick) {
		//payload.styleNumber and payload.url
		var i, attrArray = [];
		attrArray["17"] = digitalData.outfit.styleNumber;
		attrArray["43"] = payload.styleNumber;
		if (payload.title.indexOf('Fit Fundamentals') > -1) {
			cmCreateElementTag('Fit Fundamentals', 'Outfit Page', attrArray.join('-_-'));
			spCreateElementTag('Fit Fundamentals', 'Outfit Page', attrArray.join('-_-'));
		}
		else if(payload.title.indexOf('Athletic Shoe Fit Guide')>-1) {
			 cmCreateElementTag('Athletic Shoe Fit Guide', 'Outfit Page', attrArray.join('-_-'));
			 spCreateElementTag('Athletic Shoe Fit Guide', 'Outfit Page', attrArray.join('-_-'));
		}
		else {
			cmCreateElementTag('Product Learn More', 'Outfit Page', attrArray.join('-_-'));
			spCreateElementTag('Product Learn More', 'Outfit Page', attrArray.join('-_-'));
		}
	}
}