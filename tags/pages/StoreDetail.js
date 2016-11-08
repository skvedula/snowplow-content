import spCreateElementTag from '../../libs/spCreateElementTag';
import spLogError from '../../libs/spLogError';

import storeOpeningsFooterClick from '../src/elements/storeOpeningsFooterClick';

window.spCreateElementTag = spCreateElementTag;

function StoreDetail_Tags() {
	try {
		document.addEventListener('click', '.store-event-nav input', function() {
			StoreLocator_storeSearchFilters(this);
		});
	} catch(e) {
		spLogError(e);
	}
}
StoreDetail_Tags();