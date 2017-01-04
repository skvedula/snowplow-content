import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_videoAlt(payload, attrs) {
	if (payload.action === window.nord.core.actions.GalleryNavigate && payload.type === 'Video') {
		cmCreateElementTag('Video Alt - {360}', 'Outfit Page', attrs);
		spCreateElementTag('Video Alt - {360}', 'Outfit Page', attrs);
	}
}