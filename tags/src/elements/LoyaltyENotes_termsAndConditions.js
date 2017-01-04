export default function LoyaltyENotes_termsAndConditions(country) {
	var loc = ' - US';
	if (country) loc = ' - CAD';
	cmCreateElementTag('Terms & Conditions' + loc, 'Non-Tender E-Note');
	spCreateElementTag('Terms & Conditions' + loc, 'Non-Tender E-Note');
}