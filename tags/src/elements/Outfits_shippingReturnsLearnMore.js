import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_shippingReturnsLearnMore() {
	var attrArray=[];
	if (payload.action === window.nord.core.actions.GiftOptionsModalShow ) {
		attrArray[16] = digitalData.outfit.styleNumber;
		attrArray[42] = payload.styleNumber;
		cmCreateElementTag('Shipping Learn More - {GiftOption}', 'Outfit Page', attrArray.join('-_-'));
		spCreateElementTag('Shipping Learn More - {GiftOption}', 'Outfit Page', attrArray.join('-_-'));
	}
	else if (payload.action === window.nord.core.actions.SameDayDeliveryModalShow ) {
		attrArray=[];
		attrArray[16] = digitalData.outfit.styleNumber;
		attrArray[42] = payload.styleNumber;
		cmCreateElementTag('Shipping Learn More - {SameDayDelivery}', 'Outfit Page', attrArray.join('-_-'));
		spCreateElementTag('Shipping Learn More - {SameDayDelivery}', 'Outfit Page', attrArray.join('-_-'));
	}
}