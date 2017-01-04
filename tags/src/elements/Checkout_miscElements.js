export default function Checkout_miscElements() {
	$(document).on('XHR_STATUS', function(event, data) {
        if (data === 'shipMethod: Success') {
            setTimeout(function() { 
                cmCreateElementTag('shipMethod: ' + $('input[name="ship-method"]:checked').val() + (document.referrer.indexOf('paypal.com') > -1 && window.location.search.indexOf('token=') === -1 ? ' - PayPal' : ''),'FAST AND EASY CHECKOUT'); 
                spCreateElementTag('shipMethod: ' + $('input[name="ship-method"]:checked').val() + (document.referrer.indexOf('paypal.com') > -1 && window.location.search.indexOf('token=') === -1 ? ' - PayPal' : ''),'FAST AND EASY CHECKOUT'); 
            }, 1000);
        }
        else {
            cmCreateElementTag(data + (document.referrer.indexOf('paypal.com') > -1 ? ' - PayPal' : ''),'FAST AND EASY CHECKOUT');
            spCreateElementTag(data + (document.referrer.indexOf('paypal.com') > -1 ? ' - PayPal' : ''),'FAST AND EASY CHECKOUT');
        }
    });
}