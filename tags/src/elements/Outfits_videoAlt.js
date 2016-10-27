import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_videoAlt() {
	if (payload.action === window.nord.core.actions.GalleryNavigate && payload.type === 'Video') {
		var attrArray=[];
		attrArray["17"] = digitalData.outfit.styleNumber;
		attrArray["43"] = payload.styleNumber;
		cmCreateElementTag('Video Alt - {360}', 'Outfit Page', attrArray.join('-_-'));
		spCreateElementTag('Video Alt - {360}', 'Outfit Page', attrArray.join('-_-'));
	}
}