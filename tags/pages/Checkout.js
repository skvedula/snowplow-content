import Checkout_addNote from '../src/elements/Checkout_addNote';
import Checkout_applyNote from '../src/elements/Checkout_applyNote';
import Checkout_availableNote from '../src/elements/Checkout_availableNote';

function Checkout_Tags() {
	try {
	    document.addEventListener('click', '#payment > form > div.payment-method.nord-note.ng-scope > div.payment-information.subsection.ng-scope > input', function() { Checkout_addNote(); });
	    document.addEventListener('click', 'input.apply.button.nord-note-apply.ng-scope', function() { Checkout_applyNote(); });
	    Checkout_availableNote();
	} catch(e) { console.warn(e); }
}