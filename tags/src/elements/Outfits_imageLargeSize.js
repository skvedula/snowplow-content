import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_imageLargeSize(payload, attrs) {
	if (payload.action === window.nord.core.actions.GalleryModalShow) {
		cmCreateElementTag('Large Image', 'Outfit Page', attrs);
		spCreateElementTag('Large Image', 'Outfit Page', attrs);
	}
}