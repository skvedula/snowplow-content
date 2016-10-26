import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_productBrand() {
	if (payload.action === window.nord.core.actions.ProductBrandTitleClick) {
		var attrArray = [];
		attrArray["17"] = digitalData.outfit.styleNumber;
		attrArray["43"] = payload.styleNumber;
		cmCreateElementTag('Brand', 'Product Page', attrArray.join('-_-'));
		spCreateElementTag('Brand', 'Product Page', attrArray.join('-_-'));
	}
}