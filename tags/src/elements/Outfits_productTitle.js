import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_productTitle(payload, attrs) {
	if (payload.action === window.nord.core.actions.ProductTitleClick) {
		cmCreateElementTag('Product - Name Link', 'Outfit Page', attrs);
		spCreateElementTag('Product - Name Link', 'Outfit Page', attrs);
	}
}