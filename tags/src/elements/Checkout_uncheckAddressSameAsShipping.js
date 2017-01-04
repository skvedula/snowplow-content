export default function Checkout_uncheckAddressSameAsShipping() {
	cmCreateElementTag('Bill != Ship' + (document.referrer.indexOf('paypal.com') > -1 && window.location.search.indexOf('token=') === -1 ? ' - PayPal' : ''),'FAST AND EASY CHECKOUT',null);
	spCreateElementTag('Bill != Ship' + (document.referrer.indexOf('paypal.com') > -1 && window.location.search.indexOf('token=') === -1 ? ' - PayPal' : ''),'FAST AND EASY CHECKOUT',null);
}