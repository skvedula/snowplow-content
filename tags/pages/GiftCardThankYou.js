import GiftCardThankYou_orderConfirmation from '../src/orders/GiftCardThankYou_orderConfirmation';
import GiftCardThankYou_addAnother from '../src/elements/GiftCardThankYou_addAnother';
import GiftCardThankYou_print from '../src/elements/GiftCardThankYou_print';

GiftCardThankYou_orderConfirmation();

document.querySelector('#confirm-add-another').addEventListener('click', GiftCardThankYou_addAnother);

document.querySelector('#confirm-print').addEventListener('click', GiftCardThankYou_print);