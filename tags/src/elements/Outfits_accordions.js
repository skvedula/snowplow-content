import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_accordions() {
	if (payload.action === window.nord.core.actions.ProductDrawerToggle) {
		var isOpen, attrArray=[];
		attrArray[16] = digitalData.outfit.styleNumber;
		attrArray[42] = payload.styleNumber;
		if(payload.type === 'DetailsAndCare') {
			cmCreateElementTag('Details and Care - {'+(isOpen = payload.isOpen?'Open':'Closed')+'}', 'Outfit Page', attrArray.join('-_-'));
			spCreateElementTag('Details and Care - {'+(isOpen = payload.isOpen?'Open':'Closed')+'}', 'Outfit Page', attrArray.join('-_-'));
		} else if(payload.type === 'ShippingAndReturns') {
			cmCreateElementTag('Shipping and Returns - {'+ (isOpen = payload.isOpen?'Open':'Closed') +'}', 'Outfit Page', attrArray.join('-_-'));
			spCreateElementTag('Shipping and Returns - {'+ (isOpen = payload.isOpen?'Open':'Closed') +'}', 'Outfit Page', attrArray.join('-_-'));
		} else if(payload.type === 'PickupInStore') {
			cmCreateElementTag('Availability - {'+(isOpen = payload.isOpen?'Open':'Closed')+'}', 'Outfit Page', attrArray.join('-_-'));
			spCreateElementTag('Availability - {'+(isOpen = payload.isOpen?'Open':'Closed')+'}', 'Outfit Page', attrArray.join('-_-'));
		}
	}
}