export default function Checkout_shipMethodSave() {
	cmCreateElementTag('Ship Method Save' + (document.referrer.indexOf('paypal.com') > -1 && window.location.search.indexOf('token=') === -1 ? ' - PayPal' : ''), 'FAST AND EASY CHECKOUT');
	spCreateElementTag('Ship Method Save' + (document.referrer.indexOf('paypal.com') > -1 && window.location.search.indexOf('token=') === -1 ? ' - PayPal' : ''), 'FAST AND EASY CHECKOUT');
}