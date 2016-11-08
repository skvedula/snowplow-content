import spCreateElementTag from '../../libs/spCreateElementTag';
import spLogError from '../../libs/spLogError';

import ShopMyStore_getDirections from '../src/elements/ShopMyStore_getDirections';

window.spCreateElementTag = spCreateElementTag;

function ShopMyStoreDirectionsModal_Tags() {
	try {
		ShopMyStore_getDirections(window.location.pathname.split( '/' )[2]);
	} catch(e) {
		spLogError(e);
	}
}
ShopMyStoreDirectionsModal_Tags();