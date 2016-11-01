import spCreateElementTag from '../../libs/spCreateElementTag';
import spLogError from '../../libs/spLogError';

import Checkout_addNote from '../src/elements/Checkout_addNote';
import Checkout_applyNote from '../src/elements/Checkout_applyNote';
import Checkout_availableNote from '../src/elements/Checkout_availableNote';
import Checkout_CheckOutWithPayPal from '../src/elements/Checkout_CheckOutWithPayPal';
import Checkout_EditPayment from '../src/elements/Checkout_EditPayment';
import Checkout_SelectGiftOption from '../src/elements/Checkout_SelectGiftOption';

window.spCreateElementTag = spCreateElementTag;

function Checkout_Tags() {
	try {
	    document.addEventListener('click', '#payment > form > div.payment-method.nord-note.ng-scope > div.payment-information.subsection.ng-scope > input', function() { 
	    	Checkout_addNote(); 
	    });

	    document.addEventListener('click', 'input.apply.button.nord-note-apply.ng-scope', function() { 
	    	Checkout_applyNote(); 
	    });

	    Checkout_availableNote();

	    document.addEventListener('click', '[data-ng-click="payPalExpressCheckout($event)"]', function() { 
	    	Checkout_CheckOutWithPayPal.js(); 
	    });

	    document.addEventListener('click', 'section#payment a.edit.button', function() {
	    	Checkout_EditPayment();
	    });

	    document.addEventListener('click', 'input[data-ng-model="giftOption"]', function() {
	    	Checkout_SelectGiftOption();
	    });
	} catch(e) {
		spLogError(e);
	}
}