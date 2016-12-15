import Checkout_applySystemNoteSave from '../src/elements/Checkout_applySystemNoteSave';
import Checkout_applyManualNoteClick from '../src/elements/Checkout_applyManualNoteClick';
import Checkout_applyManualNoteSave from '../src/elements/Checkout_applyManualNoteSave';
import Checkout_availableNote from '../src/elements/Checkout_availableNote';
import Checkout_checkOutWithPayPal from '../src/elements/Checkout_checkOutWithPayPal';
import Checkout_editPayment from '../src/elements/Checkout_editPayment';
import Checkout_selectGiftOption from '../src/elements/Checkout_selectGiftOption';
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
		Checkout_personalBonusPoint();
		document.addEventListener('click', function(e) {
			if (e.target.getAttribute('data-ng-model')) {
				if (e.target.getAttribute('data-ng-model') === "addressTypes['shippingAddr'].isSameAsBilling") Checkout_uncheckAddressSameAsShipping();

				if (e.target.getAttribute('data-ng-model') === "giftOption") Checkout_selectGiftOption();

				if (e.target.getAttribute('data-ng-model') === "currentlySelectedItemAddressEntries[$index]") {
					var itemStyleNumber = $(e.target).parents('.bag-item').find('.item-details .item-number').next('.ng-binding').text().replace(/[#,\s]/g, '');
	    			Checkout_multishipItemEditAddress(itemStyleNumber);
				}

				if (/subscribeForEmailUpdates/.test(e.target.getAttribute('data-ng-model')) && !e.target.checked) Checkout_emailOptOut();

				if (e.target.getAttribute('data-ng-model') === 'selectedMultipleAddrMode.value' && e.target.getAttribute('name') === 'multiple-address') Checkout_selectMultiship(e.target.getAttribute('data-ng-value'));
			}

			else if (e.target.getAttribute('data-ng-click')) {
				if (/applyManualNordstromNote/.test(e.target.getAttribute('data-ng-click'))) Checkout_applyManualNoteSave();

				if (/applySystematicNordstromNote/.test(e.target.getAttribute('data-ng-click'))) Checkout_applySystemNoteSave(e.target);

				if (/showNordNoteFields/.test(e.target.getAttribute('data-ng-click'))) Checkout_applyManualNoteClick();
				
				if (e.target.getAttribute('data-ng-click') === "payPalExpressCheckout($event)") Checkout_checkOutWithPayPal();

				if (e.target.getAttribute('data-ng-click') === 'toPaymentActiveState($event)') Checkout_editPayment();

				if (e.target.getAttribute('data-ng-click') === 'toShippMethodInfoState($event)') Checkout_shipMethodSave();

				if (e.target.getAttribute('data-ng-click') === 'saveNewEmail($event)' && e.target.getAttribute('client-validation') === 'onSubmit, saveYourInfo') Checkout_saveYourInfo();

				if (e.target.getAttribute('data-ng-click') === 'removeAppliedNote(systematicNordNote, $event)') Checkout_undoNoteClick(e.target);
			}

			else if (e.target.getAttribute('data-ng-show')) {
				if (e.target.id === 'addItemLevelNewAddress' && e.target.getAttribute('data-ng-show') === '!hasSavedAddress') Checkout_multishipAddNewAddress();
			}

			if (/saveSelectedItemLevelShipAddr/.test(e.target.getAttribute('data-ng-click'))) Checkout_multishipItemAddressSave();

			if (e.target.id === 'selectItemLevelSavedAddress' && /edit/.test(e.target.classList) && /button/.test(e.target.classList)) {
				var itemStyleNumber = $(this).parents('.bag-item').find('.item-details .item-number').next('.ng-binding').text().replace(/[#,\s]/g, '');
				// var itemStyleNumber = this.textContent.replace(/[#,\s{1,}]/g, '');
		    	Checkout_multishipItemEditAddress(itemStyleNumber);
			}

			if (e.target.id === 'shipping-method-modal' && e.target.nodeName === 'input' && e.target.getAttribute('type') === 'radio') {
		    	var shipMethod = this.textContent;
		    	Checkout_multishipItemShipMethodSelect(shipMethod);
			}

			if (/js-save-gift/.test(e.target.classList)) Checkout_giftOptionSave();
		});

		// document.querySelector('[data-ng-model="addressTypes[\'shippingAddr\'].isSameAsBilling"]').addEventListener('click', Checkout_uncheckAddressSameAsShipping, false);

	    // document.querySelector('input[data-ng-click*="applyManualNordstromNote"').addEventListener('click', Checkout_applyManualNoteSave, false);

	    // document.querySelector('input[data-ng-click*="applySystematicNordstromNote"').addEventListener('click', Checkout_applySystemNoteSave, false);

	    // document.querySelector('[data-ng-click*="showNordNoteFields"]').addEventListener('click', Checkout_applyManualNoteClick, false);

	    Checkout_availableNote();

	    // document.querySelector('[data-ng-click="payPalExpressCheckout($event)"]').addEventListener('click', Checkout_checkOutWithPayPal, false);

	    // document.querySelector('section#payment a.edit.button').addEventListener('click', Checkout_editPayment, false);

	    // document.querySelector('input[data-ng-model="giftOption"]').addEventListener('click', Checkout_selectGiftOption, false);

	    // document.querySelector('a#addItemLevelNewAddress[data-ng-show="!hasSavedAddress"]').addEventListener('click', Checkout_multishipAddNewAddress, false);

	    // document.querySelector('#shipping-address-modal a.save.button').addEventListener('click', Checkout_multishipItemAddressSave, false);

	  //   document.querySelector('#selectItemLevelSavedAddress.edit.button').addEventListener('click', function() {
			// var itemStyleNumber = $(this).parents('.bag-item').find('.item-details .item-number').next('.ng-binding').text().replace(/[#,\s{1,}]/g, '');
			// // var itemStyleNumber = this.textContent.replace(/[#,\s{1,}]/g, '');
	  //   	Checkout_multishipItemEditAddress(itemStyleNumber);
	  //   });

	  //   document.querySelector('[data-ng-model="currentlySelectedItemAddressEntries[$index]"]').addEventListener('click', function() {
			// var itemStyleNumber = this.parents('.bag-item').find('.item-details .item-number').next('.ng-binding').text().replace(/[#,\s{1,}]/g, '');
	  //   	Checkout_multishipItemEditAddress(itemStyleNumber);
	  //   });

	    // document.querySelector('#shipping-method-modal input[type=radio]').addEventListener('click', function() {
	    // 	var shipMethod = this.textContent;
	    // 	Checkout_multishipItemShipMethodSelect(shipMethod);
	    // });

	    // document.querySelector('[data-ng-click="toShippMethodInfoState($event)"]').addEventListener('click', Checkout_shipMethodSave, false);

		// document.querySelector('input[data-ng-model*="subscribeForEmailUpdates"]:not(:checked)').addEventListener('click', Checkout_emailOptOut, false);

		// document.querySelector('[data-ng-show^="availableGiftOption"] .radioActions input[type=button].save:lt(3)').addEventListener('click', Checkout_giftOptionSave, false);



		// document.querySelector('[client-validation="onSubmit, saveYourInfo"], [data-ng-click="saveNewEmail($event)"]').addEventListener('click', Checkout_saveYourInfo, false);

		// document.querySelector('#payment > form > div.payment-method.nord-note.ng-scope > div.applied-nord-notes.ng-scope > ul > li > span.buttons > a').addEventListener('click', Checkout_undoNoteClick, false);

		// document.querySelector('[data-ng-model="multipleAddrMode"], input[name=multiple-address]').addEventListener('click', function() {
		// 	Checkout_selectMultiship(this.getAttribute('data-ng-value'));
		// });

		Checkout_miscElements();

	    $(document).on('UNKNOWN_ERROR', function(event) {
			cmCreateElementTag(event.data,'FAST AND EASY CHECKOUT');
		});

		$(document).on('CheckoutError', function(e, source, message) {
			Checkout_loyaltyClicksAndErrors(e, source, message);
		});
	} catch(e) {
		spLogError(e);
	}
}
Checkout_Tags();