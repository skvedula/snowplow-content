import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_socialWidget(payload, attrs) {
	if (payload.action === window.nord.core.actions.ProductShareButtonClick ) {
		cmCreateElementTag('Social - {'+payload.type+'}', 'Outfit Page', attrs);
		spCreateElementTag('Social - {'+payload.type+'}', 'Outfit Page', attrs);
	}
}