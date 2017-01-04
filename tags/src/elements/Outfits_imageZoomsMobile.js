import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_imageZoomsMobile(payload, attrs) {
	if (payload.action === window.nord.core.actions.SwipeGalleryZoomModalRelease || payload.action === window.nord.core.actions.SwipeGalleryZoomModalTap) {
		cmCreateElementTag('Image Zoom', 'Outfit Page', attrs);
		spCreateElementTag('Image Zoom', 'Outfit Page', attrs);
	}
}