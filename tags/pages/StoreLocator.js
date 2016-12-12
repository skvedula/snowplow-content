import StoreLocator_storeSearchClick from '../src/elements/StoreLocator_storeSearchClick';
import StoreLocator_storeSearchFilters from '../src/elements/StoreLocator_storeSearchFilters';
import StoresEvents_preferredStore from '../src/elements/StoresEvents_preferredStore';

function StoreLocator_Tags() {
	try {
		StoreLocator_storeSearchClick();

		var storeViewFilters = document.querySelectorAll('.store-event-nav input');
		for(var viewFilter = 0; viewFilter < storeViewFilters.length; viewFilter++) {
		 storeViewFilters[viewFilter].addEventListener('click', function() {
		   StoreLocator_storeSearchFilters(this);
		 });
		}

		var preferredStoreArray = document.querySelectorAll('.set-preferred-store');
		for(var preferredStore = 0; preferredStore < preferredStoreArray.length; preferredStore++) {
		 preferredStoreArray[preferredStore].addEventListener('click', function() {
			var store_number = $(this).parent().find('.store-address div').data('storeNumber');
		 	StoresEvents_preferredStore(store_number);
		 });
		}
	} catch(e) {
		spLogError(e);
	}
}
StoreLocator_Tags(); 