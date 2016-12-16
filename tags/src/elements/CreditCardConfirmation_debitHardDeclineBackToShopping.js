export default function CreditCardConfirmation_debitHardDeclineBackToShopping() {
	(function debitHardDeclineBackToShopping() {
        if (typeof cmCreateElementTag === 'function') {
	        if (bt_cookie('cardType') === 'debit'){
	            cmCreateElementTag('Debit Decline Back to Shopping','Apply and Buy');
	            spCreateElementTag('Debit Decline Back to Shopping','Apply and Buy');
                document.cookie = 'cardType=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	        } 
        } else {
            window.setTimeout(debitHardDeclineBackToShopping, 500);
        }
    })();
}