import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_imageZooms(payload, attrs) {
	if (payload.action === window.nord.core.actions.GalleryWindowClick) {
		cmCreateElementTag('Image Zoom', 'Outfit Page', attrs);
		spCreateElementTag('Image Zoom', 'Outfit Page', attrs);
	}
}