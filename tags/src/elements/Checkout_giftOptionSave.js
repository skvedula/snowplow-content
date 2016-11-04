export default function Checkout_giftOptionSave() {
	setTimeout(function() {
		cmCreateElementTag('Gift Option' + (/show/.test(document.querySelector('.content.gift').classList)?' Error':''), 'FAST AND EASY CHECKOUT');
		spCreateElementTag('Gift Option' + (/show/.test(document.querySelector('.content.gift').classList)?' Error':''), 'FAST AND EASY CHECKOUT');
	}, 3000);
}