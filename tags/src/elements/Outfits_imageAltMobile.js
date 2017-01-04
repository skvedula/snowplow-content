import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_imageAltMobile(payload, attrs) {
	if (payload.action === window.nord.core.actions.SwipeGalleryAnimationComplete) {
		var altIndex = payload.index+1;
		cmCreateElementTag('Image Alt {'+altIndex+'}', 'Outfit Page', attrs);
		spCreateElementTag('Image Alt {'+altIndex+'}', 'Outfit Page', attrs);
	}
}