import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_imageAlt(payload, attrs) {
	if (payload.action === window.nord.core.actions.GalleryNavigate && payload.type === 'Image') {
		cmCreateElementTag('Image Alt {'+payload.index+'}', 'Outfit Page', attrs);
		spCreateElementTag('Image Alt {'+payload.index+'}', 'Outfit Page', attrs);
	}
}