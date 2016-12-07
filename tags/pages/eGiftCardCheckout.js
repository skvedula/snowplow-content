import eGiftCardCheckout_edit from '../src/elements/eGiftCardCheckout_edit';
import eGiftCardCheckout_paypal from '../src/elements/eGiftCardCheckout_paypal';
import eGiftCardCheckout_remove from '../src/elements/eGiftCardCheckout_remove';

import eGiftCardCheckout from '../src/page_views/cm/eGiftCardCheckout';

document.addEventListener('cmloaded', eGiftCardCheckout, false);

document.querySelector('#cart-content > div > div.cart-item-actions > ul > li:nth-child(1) > a').addEventListener('click', eGiftCardCheckout_edit);

document.querySelector('#order-paypal > img').addEventListener('click', eGiftCardCheckout_paypal);
document.querySelector('#cart-paypal > img').addEventListener('click', eGiftCardCheckout_paypal);

document.querySelector('#cart-content > div > div.cart-item-actions > ul > li:nth-child(2) > a').addEventListener('click', eGiftCardCheckout_remove);