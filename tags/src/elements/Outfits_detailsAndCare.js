import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_detailsAndCare(payload, attrs) {
	if (payload.action === window.nord.core.actions.ProductDetailsAndCareLinkClick) {
		if (payload.title.indexOf('Fit Fundamentals') > -1) {
			element_id = 'Fit Fundamentals';
		}
		else if(payload.title.indexOf('Athletic Shoe Fit Guide')>-1) {
			 element_id = 'Athletic Shoe Fit Guide';
		}
		else {
			element_id = 'Product Learn More';
		}
	}
}