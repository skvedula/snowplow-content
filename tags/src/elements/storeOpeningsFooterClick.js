export default function storeOpeningsFooterClick() {
	if ((window.location.pathname === '/c/stores' || window.location.pathname === '/ssr' || window.location.pathname === '/esr') && window.docCookies && window.docCookies.hasItem('btNewStoresFt') == null) {
	    //Link under footer a[title="View store openings"]
	    document.addEventListener('click', 'a[title="View store openings"]', function() {
	        window.docCookies.setItem('btNewStoresFt', '1', 2592e3, '/', '.nordstrom.com' );
	    });
	}
	else if (window.location.pathname === '/c/future-store-openings' && document.cookie.indexOf('btNewStoresFt') !== -1) {
	    cmCreateElementTag('NewStoreOpenings', 'STORES & EVENTS');
	    spCreateElementTag('NewStoreOpenings', 'STORES & EVENTS');
	    window.docCookies.setItem('btNewStoresFt', '1', 2592e3, '/', '.nordstrom.com' );
	}
} 