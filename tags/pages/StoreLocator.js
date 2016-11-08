import spCreateElementTag from '../../libs/spCreateElementTag';
import spLogError from '../../libs/spLogError';

import storeOpeningsFooterClick from '../src/elements/storeOpeningsFooterClick';
import storeOpeningsLinkClick from '../src/elements/storeOpeningsLinkClick';
import StoreLocator_storeSearchClick from '../src/elements/StoreLocator_storeSearchClick';
import StoreLocator_storeSearchFilters from '../src/elements/StoreLocator_storeSearchFilters';
import StoresEvents_preferredStore from '../src/elements/StoresEvents_preferredStore';

window.spCreateElementTag = spCreateElementTag;

function StoreLocator_Tags() {
	try {
		storeOpeningsFooterClick();
		storeOpeningsLinkClick();
		StoreLocator_storeSearchClick();
		document.addEventListener('click', '.store-event-nav input', function() {
			StoreLocator_storeSearchFilters(this);
		});
		document.addEventListener('click', '.set-preferred-store', function() {
			var store_number = $(this).parent().find('.store-address div').data('storeNumber');
		});
	} catch(e) {
		spLogError(e);
	}
}
StoreLocator_Tags();