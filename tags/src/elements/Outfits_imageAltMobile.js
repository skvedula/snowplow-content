import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_imageAltMobile() {
	if (payload.action === window.nord.core.actions.SwipeGalleryAnimationComplete) {
		var attrArray=[],altIndex =payload.index+1;
		attrArray[16] = digitalData.outfit.styleNumber;
		cmCreateElementTag('Image Alt {'+altIndex+'}', 'Outfit Page', attrArray.join('-_-'));
		spCreateElementTag('Image Alt {'+altIndex+'}', 'Outfit Page', attrArray.join('-_-'));
	}
}