import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_productPersonalization() {
	if (payload.action === window.nord.core.actions.ProductCustomizationMessageConfirm) {
		var attrArray=[];
		attrArray[16] = digitalData.outfit.styleNumber;
		attrArray[42] = payload.styleNumber;
		cmCreateElementTag('Personalization', 'Outfit Page', attrArray.join('-_-'));
		spCreateElementTag('Personalization', 'Outfit Page', attrArray.join('-_-'));
	}
}