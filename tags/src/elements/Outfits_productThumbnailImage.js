import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_productThumbnailImage() {
	if (payload.action === window.nord.core.actions.ProductThumbnailClick) {
		var attrArray=[];
		attrArray[16] = digitalData.outfit.styleNumber;
		attrArray[42] = payload.styleNumber;
		cmCreateElementTag('Product - Image Link', 'Outfit Page', attrArray.join('-_-'));
		spCreateElementTag('Product - Image Link', 'Outfit Page', attrArray.join('-_-'));
	}
}