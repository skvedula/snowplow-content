import storeOpeningsFooterClick from '../src/elements/storeOpeningsFooterClick';

function StoreDetail_Tags() {
	try {
		document.querySelector('.store-event-nav input').addEventListener('click', function() {
			StoreLocator_storeSearchFilters(this);
		});
	} catch(e) {
		spLogError(e);
	}
}
StoreDetail_Tags();