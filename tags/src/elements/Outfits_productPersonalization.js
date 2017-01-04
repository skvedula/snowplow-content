import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_productPersonalization(payload, attrs) {
	if (payload.action === window.nord.core.actions.ProductCustomizationMessageConfirm) {
		cmCreateElementTag('Personalization', 'Outfit Page', attrs);
		spCreateElementTag('Personalization', 'Outfit Page', attrs);
	}
}