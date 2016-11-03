import spCreateElementTag from '../../libs/spCreateElementTag';
import spLogError from '../../libs/spLogError';

import Checkout_addNote from '../src/elements/Checkout_addNote';
import Checkout_applyNote from '../src/elements/Checkout_applyNote';
import Checkout_availableNote from '../src/elements/Checkout_availableNote';
import Checkout_checkOutWithPayPal from '../src/elements/Checkout_checkOutWithPayPal';
import Checkout_editPayment from '../src/elements/Checkout_editPayment';
import Checkout_selectGiftOption from '../src/elements/Checkout_selectGiftOption';
import Checkout_multishipAddNewAddress from '../src/elements/Checkout_multishipAddNewAddress';
import Checkout_multishipAddNewAddress from '../src/elements/Checkout_multishipAddNewAddress';
import Checkout_multishipItemAddressSave from '../src/elements/Checkout_multishipItemAddressSave';
import Checkout_multishipItemEditAddress from '../src/elements/Checkout_multishipItemEditAddress';
import Checkout_multishipItemSelectOrAddNewAddress from '../src/elements/Checkout_multishipItemSelectOrAddNewAddress';
import Checkout_multishipItemShipMethodSelect from '../src/elements/Checkout_multishipItemShipMethodSelect';
import Checkout_shipMethodSave from '../src/elements/Checkout_shipMethodSave';

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
	    	Checkout_checkOutWithPayPal(); 
	    });

	    document.addEventListener('click', 'section#payment a.edit.button', function() {
	    	Checkout_editPayment();
	    });

	    document.addEventListener('click', 'input[data-ng-model="giftOption"]', function() {
	    	Checkout_selectGiftOption();
	    });

	    document.addEventListener('click', 'a#addItemLevelNewAddress[data-ng-show="!hasSavedAddress"]', function() {
	    	Checkout_multishipAddNewAddress();
	    });

	    document.addEventListener('click', '#shipping-address-modal a.save.button', function() {
	    	Checkout_multishipItemAddressSave();
	    });

	    document.addEventListener('click', '#selectItemLevelSavedAddress.edit.button', function(e) {
			var itemStyleNumber = $(this).parents('.bag-item').find('.item-details .item-number').next('.ng-binding').text().replace(/[#,\s{1,}]/g, '');
			var itemStyleNumber = e.target
	    	Checkout_multishipItemEditAddress(itemStyleNumber);
	    });

	    document.addEventListener('click', '[data-ng-model="currentlySelectedItemAddressEntries[$index]"]', function() {
			var itemStyleNumber = $(this).parents('.bag-item').find('.item-details .item-number').next('.ng-binding').text().replace(/[#,\s{1,}]/g, '');
	    	Checkout_multishipItemEditAddress(itemStyleNumber);
	    });

	    document.addEventListener('click', '#shipping-method-modal input[type=radio]', function(e) {
	    	var shipMethod = e.target.textContent;
	    	Checkout_multishipItemShipMethodSelect(shipMethod);
	    });

	    document.addEventListener('click', '[data-ng-click="toShippMethodInfoState($event)"]', function() {
	    	Checkout_shipMethodSave();
	    });
	} catch(e) {
		spLogError(e);
	}
}