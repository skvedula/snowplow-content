import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_shippingReturnsLearnMore(payload, attrs) {
	if (payload.action === window.nord.core.actions.GiftOptionsModalShow ) {
		cmCreateElementTag('Shipping Learn More - {GiftOption}', 'Outfit Page', attrs);
		spCreateElementTag('Shipping Learn More - {GiftOption}', 'Outfit Page', attrs);
	}
	else if (payload.action === window.nord.core.actions.SameDayDeliveryModalShow ) {
		cmCreateElementTag('Shipping Learn More - {SameDayDelivery}', 'Outfit Page', attrs);
		spCreateElementTag('Shipping Learn More - {SameDayDelivery}', 'Outfit Page', attrs);
	}
}