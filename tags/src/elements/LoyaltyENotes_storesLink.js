export default function LoyaltyENotes_storesLink(country) {
	var loc = ' - US';
	if (country) loc = ' - CAD';
	cmCreateElementTag('Stores Link' + loc, 'Non-Tender E-Note');
	spCreateElementTag('Stores Link' + loc, 'Non-Tender E-Note');
}