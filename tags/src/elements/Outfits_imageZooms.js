import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_imageZooms() {
	if (payload.action === window.nord.core.actions.GalleryWindowClick) {
		var attrArray=[];
		attrArray[16] = digitalData.outfit.styleNumber;
		attrArray[42] = payload.styleNumber;
		cmCreateElementTag('Image Zoom', 'Outfit Page', attrArray.join('-_-'));
		spCreateElementTag('Image Zoom', 'Outfit Page', attrArray.join('-_-'));
	}
}