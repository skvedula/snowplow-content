import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_largeImageMobile() {
	if (payload.action === window.nord.core.actions.SwipeGalleryZoomModalShow) {
		var attrArray=[];
		attrArray["17"] = digitalData.outfit.styleNumber;

		cmCreateElementTag('Large Image', 'Outfit Page', attrArray.join('-_-'));
		spCreateElementTag('Large Image', 'Outfit Page', attrArray.join('-_-'));
	}
}