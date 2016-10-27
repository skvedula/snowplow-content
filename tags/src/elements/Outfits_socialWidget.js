import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_socialWidget() {
	if (payload.action === window.nord.core.actions.ProductShareButtonClick ) {
		var attrArray=[];
		attrArray["17"] = digitalData.outfit.styleNumber;
		attrArray["43"] = payload.styleNumber;
		cmCreateElementTag('Social - {'+payload.type+'}', 'Outfit Page', attrArray.join('-_-'));
		spCreateElementTag('Social - {'+payload.type+'}', 'Outfit Page', attrArray.join('-_-'));
	}
}