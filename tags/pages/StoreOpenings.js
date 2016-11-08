import spCreateElementTag from '../../libs/spCreateElementTag';
import spLogError from '../../libs/spLogError';

import storeOpeningsFooterClick from '../src/elements/storeOpeningsFooterClick';
import storeOpeningsLinkClick from '../src/elements/storeOpeningsLinkClick';

window.spCreateElementTag = spCreateElementTag;

function StoreOpenings_Tags() {
	try {
		storeOpeningsFooterClick();
		storeOpeningsLinkClick();
	} catch(e) {
		spLogError(e);
	}
}
StoreOpenings_Tags();