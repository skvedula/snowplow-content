export default function Checkout_emailOptOut() {
	cmCreateElementTag('Guest Email Opt-out' + (document.referrer.indexOf('paypal.com') > -1 && window.location.search.indexOf('token=') === -1 ? ' - PayPal' : ''), 'FAST AND EASY CHECKOUT');
	spCreateElementTag('Guest Email Opt-out' + (document.referrer.indexOf('paypal.com') > -1 && window.location.search.indexOf('token=') === -1 ? ' - PayPal' : ''), 'FAST AND EASY CHECKOUT');
}