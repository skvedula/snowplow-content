if ((window.location.pathname === '/c/stores' || window.location.pathname === '/ssr' || window.location.pathname === '/esr') && require.defined('nord/feature/util/cookie') && require('nord/feature/util/cookie').load('btNewStoresMap') == undefined) {
    $(document).on('mouseup', '.new-store-link a', function() {
        require('nord/feature/util/cookie').save('btNewStoresMap', '1', { domain: '.nordstrom.com', path: '/' });
    });
}
else if (window.location.pathname === '/ourstores/openings/openings.asp' && document.cookie.indexOf('btNewStoresMap') !== -1) {
    window.clickstream.fire('element', ['cm','sp'], 'NewStoreOpeningsMap', 'STORES & EVENTS');
    document.cookie = encodeURIComponent('btNewStoresMap') + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + "; domain=.nordstrom.com" + "; path=/";
}