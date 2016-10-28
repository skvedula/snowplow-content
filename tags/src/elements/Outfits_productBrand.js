import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_productBrand(payload, attrs) {
	if (payload.action === window.nord.core.actions.ProductBrandTitleClick) {
		cmCreateElementTag('Brand', 'Outfit Page', attrs);
		spCreateElementTag('Brand', 'Outfit Page', attrs);
	}
}