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

function Checkout_Tags() {
	try {
	    document.querySelector('#payment > form > div.payment-method.nord-note.ng-scope > div.payment-information.subsection.ng-scope > input').addEventListener('click', function() { 
	    	Checkout_addNote(); 
	    });

	    document.querySelector('input[data-ng-click*="applySystematicNordstromNote"').addEventListener('click', function() { 
	    	Checkout_applySystemNoteSave(); 
	    });

	    document.querySelector('[data-ng-click*="showNordNoteFields"]').addEventListener('click', function() { 
	    	Checkout_applyManualNoteClick(); 
	    });

	    document.querySelector('input[data-ng-click*="applyManualNordstromNote"').addEventListener('click', function() { 
	    	Checkout_applyManualNoteSave(); 
	    });

	    Checkout_availableNote();

	    document.querySelector('[data-ng-click="payPalExpressCheckout($event)"]').addEventListener('click', function() { 
	    	Checkout_checkOutWithPayPal(); 
	    });

	    document.querySelector('section#payment a.edit.button').addEventListener('click', function() {
	    	Checkout_editPayment();
	    });

	    document.querySelector('input[data-ng-model="giftOption"]').addEventListener('click', function() {
	    	Checkout_selectGiftOption();
	    });

	    document.querySelector('a#addItemLevelNewAddress[data-ng-show="!hasSavedAddress"]').addEventListener('click', function() {
	    	Checkout_multishipAddNewAddress();
	    });

	    document.querySelector('#shipping-address-modal a.save.button').addEventListener('click', function() {
	    	Checkout_multishipItemAddressSave();
	    });

	    document.querySelector('#selectItemLevelSavedAddress.edit.button').addEventListener('click', function() {
			var itemStyleNumber = $(this).parents('.bag-item').find('.item-details .item-number').next('.ng-binding').text().replace(/[#,\s{1,}]/g, '');
			var itemStyleNumber = this....textContent.replace(/[#,\s{1,}]/g, '');
	    	Checkout_multishipItemEditAddress(itemStyleNumber);
	    });

	    document.querySelector('[data-ng-model="currentlySelectedItemAddressEntries[$index]"]').addEventListener('click', function() {
			var itemStyleNumber = this.parents('.bag-item').find('.item-details .item-number').next('.ng-binding').text().replace(/[#,\s{1,}]/g, '');
	    	Checkout_multishipItemEditAddress(itemStyleNumber);
	    });

	    document.querySelector('#shipping-method-modal input[type=radio]').addEventListener('click', function() {
	    	var shipMethod = this.textContent;
	    	Checkout_multishipItemShipMethodSelect(shipMethod);
	    });

	    document.querySelector('[data-ng-click="toShippMethodInfoState($event)"]').addEventListener('click', function() {
	    	Checkout_shipMethodSave();
	    });

		document.querySelector('input[data-ng-model*="subscribeForEmailUpdates"]:not(:checked)').addEventListener('click', function() {
			Checkout_emailOptOut();
		});

		document.querySelector('[data-ng-show^="giftOptionAvailable"] .radioActions input[type=button].save:lt(3)').addEventListener('click', function() {
			Checkout_giftOptionSave();
		});

		document.querySelector('[client-validation="onSubmit, saveYourInfo"], [data-ng-click="saveNewEmail($event)"]').addEventListener('click', function() {
			Checkout_saveYourInfo();
		});

		document.querySelector('[data-ng-model="addressTypes[\'shippingAddr\'].isSameAsBilling"]').addEventListener('click', function() {
			Checkout_uncheckAddressSameAsShipping();
		});

		document.querySelector('#payment > form > div.payment-method.nord-note.ng-scope > div.applied-nord-notes.ng-scope > ul > li > span.buttons > a').addEventListener('click', function() {
			Checkout_undoNoteClick();
		});

		document.querySelector('[data-ng-model="multipleAddrMode"], input[name=multiple-address]').addEventListener('click', function() {
			Checkout_selectMultiship(this.getAttribute('data-ng-value'));
		});

		Checkout_miscElements();

	    $(document).on('UNKNOWN_ERROR', function(event, data) {
			cmCreateElementTag(data,'FAST AND EASY CHECKOUT');
		});

		$(document).on('CheckoutError', function(detail) {
			Checkout_loyaltyClicksAndErrors(detail);
		});
	} catch(e) {
		spLogError(e);
	}
}
Checkout_Tags();