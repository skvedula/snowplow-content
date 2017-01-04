export default function Checkout_saveYourInfo() {
	setTimeout(function() {
		cmCreateElementTag('Guest Save Info' + (/informational/.test(document.querySelector('#save-your-information').classList)?'':' Error') + (document.referrer.indexOf('paypal.com') > -1 && window.location.search.indexOf('token=') === -1 ? ' - PayPal' : ''), 'FAST AND EASY CHECKOUT');
		spCreateElementTag('Guest Save Info' + (/informational/.test(document.querySelector('#save-your-information').classList)?'':' Error') + (document.referrer.indexOf('paypal.com') > -1 && window.location.search.indexOf('token=') === -1 ? ' - PayPal' : ''), 'FAST AND EASY CHECKOUT');
	}, 3000);
}