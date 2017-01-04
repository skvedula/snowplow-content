import storeOpeningsFooterClick from '../src/elements/storeOpeningsFooterClick';
import storeOpeningsLinkClick from '../src/elements/storeOpeningsLinkClick';

function StoreOpenings_Tags() {
	try {
		storeOpeningsFooterClick();
		storeOpeningsLinkClick();
	} catch(e) {
		spLogError(e);
	}
}
StoreOpenings_Tags(); 