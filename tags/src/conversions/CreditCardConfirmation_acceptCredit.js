export default function CreditCardConfirmation_acceptCredit() {
	(function acceptCreditConversion() {
		var offerType;
        if (window.localStorage.getItem('cardType') === 'visa') offerType = 'Visa';
        else if (window.localStorage.getItem('cardType') === 'retail') offerType = 'Retail';
        else if (window.localStorage.getItem('cardType') === 'debit') offerType = 'Debit';
        if (offerType) {
            offerType += ' Offer';
        	if (typeof cmCreateConversionEventTag === 'function') cmCreateConversionEventTag(offerType, 2, 'Apply and Buy');
        	if (typeof spCreateConversionEventTag === 'function') spCreateConversionEventTag(offerType, 2, 'Apply and Buy');
        	localStorage.removeItem('cardType');
        } else {
        	window.setTimeout(acceptCreditConversion,500);
	    }
	}());
}