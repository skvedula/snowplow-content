import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_accordions(payload, attrs) {
	if (payload.action === window.nord.core.actions.ProductDrawerToggle) {
		var isOpen;
		if(payload.type === 'DetailsAndCare') {
			element_id = 'Details and Care - {'+(isOpen = payload.isOpen?'Open':'Closed')+'}';
		} else if(payload.type === 'ShippingAndReturns') {
			element_id = 'Shipping and Returns - {'+ (isOpen = payload.isOpen?'Open':'Closed') +'}';
		} else if(payload.type === 'PickupInStore') {
			element_id = 'Availability - {'+(isOpen = payload.isOpen?'Open':'Closed')+'}';
		}
		return element_id;
	}
}