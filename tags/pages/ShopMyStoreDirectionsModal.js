import ShopMyStore_getDirections from '../src/elements/ShopMyStore_getDirections';

function ShopMyStoreDirectionsModal_Tags() {
	try {
		ShopMyStore_getDirections(window.location.pathname.split( '/' )[2]);
	} catch(e) {
		spLogError(e);
	}
}
ShopMyStoreDirectionsModal_Tags();