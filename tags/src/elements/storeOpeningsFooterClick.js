export default function storeOpeningsFooterClick() {
	if ((window.location.pathname === '/c/stores' || window.location.pathname === '/ssr' || window.location.pathname === '/esr') && require.defined('nord/feature/util/cookie') && require('nord/feature/util/cookie').load('btNewStoresFt') == undefined) {
	    document.addEventListener('click', '.new-opportunities a[href="http://about.nordstrom.com/ourstores/openings/openings.asp"]', function() {
	        require('nord/feature/util/cookie').save('btNewStoresFt', '1', { domain: '.nordstrom.com', path: '/' });
	    });
	}
	else if (window.location.pathname === '/ourstores/openings/openings.asp' && document.cookie.indexOf('btNewStoresFt') !== -1) {
	    cmCreateElementTag('NewStoreOpenings', 'STORES & EVENTS');
	    spCreateElementTag('NewStoreOpenings', 'STORES & EVENTS');
	    document.cookie = encodeURIComponent('btNewStoresFt') + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + "; domain=.nordstrom.com" + "; path=/";
	}
}