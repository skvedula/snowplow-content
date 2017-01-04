import GiftCardCategory_GiftCardLink from '../src/elements/GiftCardCategory_GiftCardLink';

setTimeout(function() {
    if (window.location.pathname === '/nordstrom-gift-cards' || window.location.pathname === '/NordstromGiftCards.aspx') {
        document.querySelector('#ctl00_mainContentPlaceHolder_NgcMainPanel > div > div.egift-cards > p:nth-child(3) > a').addEventListener('click', function() {
            if (document.cookie.indexOf('gclink') === -1) document.cookie = encodeURIComponent('gclink') + "=; domain=nordstrom.com";
        });
    }

    if (window.location.pathname.indexOf('/c/e-gift-cards') !== -1 || window.location.pathname.indexOf('/gift-card/buy/') !== -1) {
//        console.log('on nordstrom e gift card page');
        if (document.cookie.indexOf('gclink') !== -1) {
//            console.log('has cookie');
            GiftCardCategory_GiftCardLink();
//            console.log('created tag');
            document.cookie = encodeURIComponent('gclink') + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=nordstrom.com";
//            console.log('set cookie');
        }
    }
}, 1000);