import GiftCardCheckout_edit from '../src/elements/GiftCardCheckout_edit';
import GiftCardCheckout_paypal from '../src/elements/GiftCardCheckout_paypal';
import GiftCardCheckout_remove from '../src/elements/GiftCardCheckout_remove';

document.addEventListener('click', function(e) {console.log(e.target);
    if (e.target.className === 'cart-action-edit') GiftCardCheckout_edit();
    if (e.target.className === 'cart-action-remove') GiftCardCheckout_remove();
    if (e.target.nodeName === 'IMG' && /paypal/.test(e.target.parentNode.id)) GiftCardCheckout_paypal();
});