import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_addToWishlist() {
	if (payload.action === window.nord.core.actions.ProductWishlistButtonClick) {
		var attrArray=[];
		attrArray["17"] = digitalData.outfit.styleNumber;
		attrArray["43"] = payload.styleNumber;
		cmCreateElementTag('Wishlist', 'Outfit Page', attrArray.join('-_-'));
		spCreateElementTag('Wishlist', 'Outfit Page', attrArray.join('-_-'));
	}
}