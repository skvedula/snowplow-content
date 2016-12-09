import GiftCardCheckout_edit from '../src/elements/GiftCardCheckout_edit';
import GiftCardCheckout_paypal from '../src/elements/GiftCardCheckout_paypal';
import GiftCardCheckout_remove from '../src/elements/GiftCardCheckout_remove';

document.querySelector('#cart-content > div > div.cart-item-actions > ul > li:nth-child(1) > a').addEventListener('click', GiftCardCheckout_edit);

document.querySelector('#order-paypal > img').addEventListener('click', GiftCardCheckout_paypal);
document.querySelector('#cart-paypal > img').addEventListener('click', GiftCardCheckout_paypal);

document.querySelector('#cart-content > div > div.cart-item-actions > ul > li:nth-child(2) > a').addEventListener('click', GiftCardCheckout_remove);