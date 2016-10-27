import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_imageZoomsMobile() {
	if (payload.action === window.nord.core.actions.SwipeGalleryZoomModalRelease || payload.action === window.nord.core.actions.SwipeGalleryZoomModalTap) {
		var attrArray=[];
		attrArray[16] = digitalData.outfit.styleNumber;
		cmCreateElementTag('Image Zoom', 'Outfit Page', attrArray.join('-_-'));
		spCreateElementTag('Image Zoom', 'Outfit Page', attrArray.join('-_-'));
	}
}