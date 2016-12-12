export default function storeOpeningsLinkClick() {
	if ((window.location.pathname === '/c/stores' || window.location.pathname === '/ssr' || window.location.pathname === '/esr') && window.docCookies && window.docCookies.getItem('btNewStoresMap') == null) {
	    //Link under map a[title="See New Store Openings"]
	    document.addEventListener('click', 'a[title="See New Store Openings"]', function() {
	        window.docCookies.setItem('btNewStoresMap', '1', 2592e3, '/', '.nordstrom.com' );
	    });
	}
	else if (window.location.pathname === '/c/future-store-openings' && document.cookie.indexOf('btNewStoresMap') !== -1) {
	    cmCreateElementTag('NewStoreOpeningsMap', 'STORES & EVENTS');
	    spCreateElementTag('NewStoreOpeningsMap', 'STORES & EVENTS');
	    window.docCookies.setItem('btNewStoresMap', '1', 2592e3, '/', '.nordstrom.com' );
	}
} 