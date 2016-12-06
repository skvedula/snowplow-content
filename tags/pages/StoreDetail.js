import storeOpeningsFooterClick from '../src/elements/storeOpeningsFooterClick';

import StoreDetail from '../src/page_views/cm/StoreDetail';

var storeName = (('nord' in window && 'config' in window.nord && 'settings' in window.nord.config && 'storesAndEvents' in window.nord.config.settings && 'storeData' in nord.config.settings.storesAndEvents && 'Stores' in nord.config.settings.storesAndEvents.storeData && 'StoreName' in nord.config.settings.storesAndEvents.storeData.Stores[0] && typeof nord.config.settings.storesAndEvents.storeData.Stores[0].StoreName === 'string') ? nord.config.settings.storesAndEvents.storeData.Stores[0].StoreName.replace('Nordstrom ', ''): '');

StoreDetail(storeName);

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