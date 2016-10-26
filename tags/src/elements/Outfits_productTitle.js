import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_productTitle() {
	if (payload.action === window.nord.core.actions.ProductTitleClick) {
		var attrArray=[];
		attrArray["17"] = digitalData.outfit.styleNumber;
		attrArray["43"] = payload.styleNumber;
		cmCreateElementTag('Product - Name Link', 'Outfit Page', attrArray.join('-_-'));
		spCreateElementTag('Product - Name Link', 'Outfit Page', attrArray.join('-_-'));
	}
}