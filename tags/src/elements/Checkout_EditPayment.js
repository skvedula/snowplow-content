export default function Checkout_editPayment() {
	cmCreateElementTag('Edit Payment' + (document.referrer.indexOf('paypal.com') > -1 && window.location.search.indexOf('token=') === -1 ? ' - PayPal' : ''), 'FAST AND EASY CHECKOUT');
	spCreateElementTag('Edit Payment' + (document.referrer.indexOf('paypal.com') > -1 && window.location.search.indexOf('token=') === -1 ? ' - PayPal' : ''), 'FAST AND EASY CHECKOUT');
}