import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_productThumbnailImage(payload, attrs) {
	if (payload.action === window.nord.core.actions.ProductThumbnailClick) {
		cmCreateElementTag('Product - Image Link', 'Outfit Page', attrs);
		spCreateElementTag('Product - Image Link', 'Outfit Page', attrs);
	}
}