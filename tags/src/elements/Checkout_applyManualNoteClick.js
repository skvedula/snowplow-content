import spLogError from '../../libs/spLogError';

export default function Checkout_applyManualNoteClick() {
	cmCreateElementTag('APPLY A NORDSTROM NOTE' + (document.referrer.indexOf('paypal.com') > -1 ? ' - PayPal' : ''),'FAST AND EASY CHECKOUT',null);
	spCreateElementTag('APPLY A NORDSTROM NOTE' + (document.referrer.indexOf('paypal.com') > -1 ? ' - PayPal' : ''),'FAST AND EASY CHECKOUT',null);
}