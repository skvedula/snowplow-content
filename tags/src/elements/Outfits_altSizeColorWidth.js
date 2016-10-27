import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_altSizeColorWidth() {
	if (payload.action === window.nord.core.actions.ProductFilterSelect) {
		var attrArray=[];
		attrArray["17"] = digitalData.outfit.styleNumber;
		attrArray["43"] = payload.styleNumber;
		if(payload.filter === 'Size') {
			cmCreateElementTag('Alt Size - {'+payload.selection+'}', 'Outfit Page', attrArray.join('-_-'));
			spCreateElementTag('Alt Size - {'+payload.selection+'}', 'Outfit Page', attrArray.join('-_-'));
		}
		else if(payload.filter === 'Color') {
			cmCreateElementTag('Alt Color - {'+payload.selection+'}', 'Outfit Page', attrArray.join('-_-'));
			spCreateElementTag('Alt Color - {'+payload.selection+'}', 'Outfit Page', attrArray.join('-_-'));
		}
		else if(payload.filter === 'Width') {   
		 cmCreateElementTag('Alt Width - {'+payload.selection+'}', 'Outfit Page', attrArray.join('-_-'));
		 spCreateElementTag('Alt Width - {'+payload.selection+'}', 'Outfit Page', attrArray.join('-_-'));
		 }
	}
}