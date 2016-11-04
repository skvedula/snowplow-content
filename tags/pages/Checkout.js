import spCreateElementTag from '../../libs/spCreateElementTag';
import spLogError from '../../libs/spLogError';

import Checkout_applySystemNoteSave from '../src/elements/Checkout_applySystemNoteSave';
import Checkout_applyManualNoteClick from '../src/elements/Checkout_applyManualNoteClick';
import Checkout_applyManualNoteSave from '../src/elements/Checkout_applyManualNoteSave';
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
import Checkout_errors from '../src/elements/Checkout_errors';
import Checkout_emailOptOut from '../src/elements/Checkout_emailOptOut';
import Checkout_giftOptionSave from '../src/elements/Checkout_giftOptionSave';
import Checkout_saveYourInfo from '../src/elements/Checkout_saveYourInfo';
import Checkout_uncheckAddressSameAsShipping from '../src/elements/Checkout_uncheckAddressSameAsShipping';
import Checkout_personalBonusPoint from '../src/elements/Checkout_personalBonusPoint';
import Checkout_undoNoteClick from '../src/elements/Checkout_undoNoteClick';
import Checkout_selectMultiship from '../src/elements/Checkout_selectMultiship';
import Checkout_miscElements from '../src/elements/Checkout_miscElements';
import Checkout_loyaltyClicksAndErrors from '../src/elements/Checkout_loyaltyClicksAndErrors';

window.spCreateElementTag = spCreateElementTag;

function Checkout_Tags() {
	try {
	    document.addEventListener('click', '#payment > form > div.payment-method.nord-note.ng-scope > div.payment-information.subsection.ng-scope > input', function() { 
	    	Checkout_addNote(); 
	    });

	    document.addEventListener('click', 'input[data-ng-click*="applySystematicNordstromNote"', function() { 
	    	Checkout_applySystemNoteSave(); 
	    });

	    document.addEventListener('click', '[data-ng-click*="showNordNoteFields"]', function() { 
	    	Checkout_applyManualNoteClick(); 
	    });

	    document.addEventListener('click', 'input[data-ng-click*="applyManualNordstromNote"', function() { 
	    	Checkout_applyManualNoteSave(); 
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

	    document.addEventListener('click', '#selectItemLevelSavedAddress.edit.button', function() {
			var itemStyleNumber = $(this).parents('.bag-item').find('.item-details .item-number').next('.ng-binding').text().replace(/[#,\s{1,}]/g, '');
			var itemStyleNumber = this....textContent.replace(/[#,\s{1,}]/g, '');
	    	Checkout_multishipItemEditAddress(itemStyleNumber);
	    });

	    document.addEventListener('click', '[data-ng-model="currentlySelectedItemAddressEntries[$index]"]', function() {
			var itemStyleNumber = this.parents('.bag-item').find('.item-details .item-number').next('.ng-binding').text().replace(/[#,\s{1,}]/g, '');
	    	Checkout_multishipItemEditAddress(itemStyleNumber);
	    });

	    document.addEventListener('click', '#shipping-method-modal input[type=radio]', function() {
	    	var shipMethod = this.textContent;
	    	Checkout_multishipItemShipMethodSelect(shipMethod);
	    });

	    document.addEventListener('click', '[data-ng-click="toShippMethodInfoState($event)"]', function() {
	    	Checkout_shipMethodSave();
	    });

	    $(document).on('UNKNOWN_ERROR', function(event, data) {
			cmCreateElementTag(data,'FAST AND EASY CHECKOUT');
		});

		document.addEventListener('click', 'input[data-ng-model*="subscribeForEmailUpdates"]:not(:checked)', function() {
			Checkout_emailOptOut();
		});

		document.addEventListener('click', '[data-ng-show^="giftOptionAvailable"] .radioActions input[type=button].save:lt(3)', function() {
			Checkout_giftOptionSave();
		});

		document.addEventListener('click', '[client-validation="onSubmit, saveYourInfo"], [data-ng-click="saveNewEmail($event)"]', function() {
			Checkout_saveYourInfo();
		});

		document.addEventListener('click', '[data-ng-model="addressTypes[\'shippingAddr\'].isSameAsBilling"]', function() {
			Checkout_uncheckAddressSameAsShipping();
		});

		document.addEventListener('click', '#payment > form > div.payment-method.nord-note.ng-scope > div.applied-nord-notes.ng-scope > ul > li > span.buttons > a', function() {
			Checkout_undoNoteClick();
		});

		document.addEventListener('click', '[data-ng-model="multipleAddrMode"], input[name=multiple-address]', function() {
			Checkout_selectMultiship(this.getAttribute('data-ng-value'));
		});

		Checkout_miscElements();

		document.addEventListener('CheckoutError', function(detail) {
			Checkout_loyaltyClicksAndErrors(detail);
		});
	} catch(e) {
		spLogError(e);
	}
}