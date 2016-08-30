(function() {
	var afterLoad = function() {
    if (window.location.pathname === '/nordstrom-gift-cards' || window.location.pathname === '/NordstromGiftCards.aspx') {
        $(document).on('mouseup', '#ctl00_mainContentPlaceHolder_NgcMainPanel > div > div.egift-cards > p:nth-child(3) > a', function() {
            if (document.cookie.indexOf('gclink') === -1) {
                document.cookie = encodeURIComponent('gclink') + "=; domain=nordstrom.com";
            }
        });
    }

    if (window.location.pathname.indexOf('/c/e-gift-cards') !== -1 || window.location.pathname.indexOf('/gift-card/buy/') !== -1) {
        console.log('on nordstrom e gift card page');
        if (document.cookie.indexOf('gclink') !== -1) {
            // console.log('has cookie');
            window.clickstream.fire('element', ['cm','sp'], 'eGift Card', 'Gift Card Hub');
            // console.log('created tag');
            document.cookie = encodeURIComponent('gclink') + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=nordstrom.com";
            // console.log('set cookie');
        }
    }
};

    if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", function() {
            setTimeout(afterLoad, 1000);
        }, false);
    } else if (document.attachEvent) {
        document.attachEvent("onreadystatechange", function() {
            if (document.readyState === "complete") {
                setTimeout(afterLoad, 1000);
            }
        });
    }
})();
