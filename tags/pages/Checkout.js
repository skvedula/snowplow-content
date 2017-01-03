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
		var itemStyleNumber = '';
		Checkout_personalBonusPoint();
		document.addEventListener('click', function(e) {
			if (e.target.getAttribute('data-ng-model')) {
				if (e.target.getAttribute('data-ng-model') === "addressTypes['shippingAddr'].isSameAsBilling") Checkout_uncheckAddressSameAsShipping();

				if (e.target.getAttribute('data-ng-model') === "giftOption") Checkout_selectGiftOption();

				if (e.target.getAttribute('data-ng-model') === "currentlySelectedItemAddressEntries[$index]") {
					itemStyleNumber = $(e.target).parents('.bag-item').find('.item-details .item-number').next('.ng-binding').text().replace(/[#,\s]/g, '');
	    			Checkout_multishipItemSelectOrAddNewAddress(itemStyleNumber);
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

				if (e.target.getAttribute('client-validation') === 'onSubmit, saveYourInfo') Checkout_saveYourInfo();

				if (e.target.getAttribute('data-ng-click') === 'removeAppliedNote(systematicNordNote, $event)') Checkout_undoNoteClick(e.target);

				if (e.target.getAttribute('data-ng-click') === 'onItemLevelShipMethodChange(shipMethod)') {
					// Checkout_undoNoteClick(e.target);
					var shipMethod = e.target.getAttribute('value');
		    		Checkout_multishipItemShipMethodSelect(shipMethod);
				}

				if (/giftMessage/.test(e.target.getAttribute('data-ng-click')) && e.target.parentElement.className === 'actions' && e.target.getAttribute('value') === 'Save') Checkout_giftOptionSave();
			}

			else if (e.target.getAttribute('data-ng-show')) {
				if (e.target.id === 'addItemLevelNewAddress' && e.target.getAttribute('data-ng-show') === '!hasSavedAddress') Checkout_multishipAddNewAddress();
			}

			if (/saveSelectedItemLevelShipAddr/.test(e.target.getAttribute('data-ng-click'))) Checkout_multishipItemAddressSave();

			if (e.target.id === 'selectItemLevelSavedAddress' && /edit/.test(e.target.classList) && /button/.test(e.target.classList)) {
				itemStyleNumber = $(this).parents('.bag-item').find('.item-details .item-number').next('.ng-binding').text().replace(/[#,\s]/g, '');
		    	Checkout_multishipItemEditAddress(itemStyleNumber);
			}
		});

	    Checkout_availableNote();

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