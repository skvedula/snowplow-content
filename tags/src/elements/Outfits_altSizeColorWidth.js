import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_altSizeColorWidth(payload, attrs) {
	if (payload.action === window.nord.core.actions.ProductFilterSelect) {
		if(payload.filter === 'Size') {
			element_id = 'Alt Size - {'+payload.selection+'}';
		}
		else if(payload.filter === 'Color') {
			element_id = 'Alt Color - {'+payload.selection+'}';
		}
		else if(payload.filter === 'Width') {   
		 element_id = 'Alt Width - {'+payload.selection+'}';
		}
	}
}