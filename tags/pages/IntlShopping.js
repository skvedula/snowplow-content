import spCreateElementTag from '../../libs/spCreateElementTag';
import spLogError from '../../libs/spLogError';

import IntlShipping_checkoutClick from '../src/elements/IntlShipping_checkoutClick';

window.spCreateElementTag = spCreateElementTag;

function IntlShopping_Tags() {
	try {
		if (window.location.href.indexOf('previousUrl=https://secure.nordstrom.com/os') > -1 ||
			window.location.href.indexOf('previousUrl=https://osecure.dev.nordstrom.com/os') > -1 ||
			window.location.href.indexOf('previousUrl=https://tsecure.dev.nordstrom.com/os') > -1) {
			IntlShipping_checkoutClick();
		}
	} catch(e) {
		spLogError(e);
	}
}
IntlShopping_Tags();