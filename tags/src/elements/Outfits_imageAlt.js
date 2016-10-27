import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_imageAlt() {
	if (payload.action === window.nord.core.actions.GalleryNavigate && payload.type === 'Image') {
		var attrArray=[];
		attrArray[16] = digitalData.outfit.styleNumber;
		attrArray[42] = payload.styleNumber;
		cmCreateElementTag('Image Alt {'+payload.index+'}', 'Outfit Page', attrArray.join('-_-'));
		spCreateElementTag('Image Alt {'+payload.index+'}', 'Outfit Page', attrArray.join('-_-'));
	}
}