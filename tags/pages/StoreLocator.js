import storeOpeningsFooterClick from '../src/elements/storeOpeningsFooterClick';
import storeOpeningsLinkClick from '../src/elements/storeOpeningsLinkClick';
import StoreLocator_storeSearchClick from '../src/elements/StoreLocator_storeSearchClick';
import StoreLocator_storeSearchFilters from '../src/elements/StoreLocator_storeSearchFilters';
import StoresEvents_preferredStore from '../src/elements/StoresEvents_preferredStore';

function StoreLocator_Tags() {
	try {
		storeOpeningsFooterClick();
		storeOpeningsLinkClick();
		StoreLocator_storeSearchClick();
		document.querySelector('.store-event-nav input').addEventListener('click', function() {
			StoreLocator_storeSearchFilters(this);
		});
		document.querySelector('.set-preferred-store').addEventListener('click', function() {
			var store_number = $(this).parent().find('.store-address div').data('storeNumber');
		});
	} catch(e) {
		spLogError(e);
	}
}
StoreLocator_Tags();