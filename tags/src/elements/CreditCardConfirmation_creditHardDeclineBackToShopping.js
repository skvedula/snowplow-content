export default function CreditCardConfirmation_hardDeclineBackToShopping() {
	(function creditHardDeclineBackToShopping() {
        if (typeof cmCreateElementTag === 'function') {
            if (bt_cookie('cardType') === 'credit') {
                cmCreateElementTag('Decline Back to Shopping', 'Apply and Buy');
                spCreateElementTag('Decline Back to Shopping', 'Apply and Buy');
                document.cookie = 'cardType=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            }
        } else {
            window.setTimeout(creditHardDeclineBackToShopping, 500);
        }
    })();
}