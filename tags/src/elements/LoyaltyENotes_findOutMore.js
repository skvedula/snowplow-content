export default function LoyaltyENotes_findOutMore(country) {
	var loc = ' - US';
	if (country) loc = ' - CAD';
	cmCreateElementTag('Find out More' + loc, 'Non-Tender E-Note');
	spCreateElementTag('Find out More' + loc, 'Non-Tender E-Note');
}