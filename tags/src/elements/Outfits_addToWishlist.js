import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_addToWishlist(payload, attrs) {
	if (payload.action === window.nord.core.actions.ProductWishlistButtonClick) {
		element_id = 'Wishlist';
		return element_id;
	}
}