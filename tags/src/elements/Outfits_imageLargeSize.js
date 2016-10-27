import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_imageLargeSize() {
	if (payload.action === window.nord.core.actions.GalleryModalShow) {
		var attrArray=[];
		attrArray[16] = digitalData.outfit.styleNumber;
		attrArray[42] = payload.styleNumber;
		cmCreateElementTag('Large Image', 'Outfit Page', attrArray.join('-_-'));
		spCreateElementTag('Large Image', 'Outfit Page', attrArray.join('-_-'));
	}
}