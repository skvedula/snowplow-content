import GiftCardHub_errors from "../src/elements/GiftCardHub_errors";
import GiftCardHub_giftCardLink from "../src/elements/GiftCardHub_giftCardLink";
import GiftCardHub_checkBalance from "../src/elements/GiftCardHub_checkBalance";
import GiftCardHub_eGiftCardLink from "../src/elements/GiftCardHub_eGiftCardLink";

import GiftCardHub from '../src/page_views/cm/GiftCardHub';

document.addEventListener('cmloaded', GiftCardHub, false);

(function() {
    var seenError = false;
    var checkError = function(selector) {
        return function() {
            if (seenError === false && document.querySelector(selector)) {
                error();
                seenError = true;
            } else if (seenError === true && !document.querySelector(selector)) {
                seenError = false;
            }
            setTimeout(checkError(selector), 1000);
        };
    };
    var error = function() { GiftCardHub_errors(); };

    checkError('#ctl00_mainContentPlaceHolder_divGiftCardBalanceCheckOn > div.ngcError')();
})();

document.querySelector('#ctl00_mainContentPlaceHolder_NgcMainPanel > div > div.gift-cards > p:nth-child(3) > a').addEventListener('click', GiftCardHub_giftCardLink);

document.querySelector('#ctl00_mainContentPlaceHolder_checkGiftCardBalance').addEventListener('click', function() {
	setTimeout(GiftCardHub_checkBalance, 2000);
});

if (window.location.pathname === '/nordstrom-gift-cards' || window.location.pathname === '/NordstromGiftCards.aspx') {
	document.querySelector('#ctl00_mainContentPlaceHolder_NgcMainPanel > div > div.egift-cards > p:nth-child(3) > a').addEventListener('click', function() {
        if (document.cookie.indexOf('gclink') === -1) {
            document.cookie = encodeURIComponent('gclink') + "=; domain=nordstrom.com";
        }
    });
}
if (window.location.pathname.indexOf('/c/e-gift-cards') !== -1 || window.location.pathname.indexOf('/gift-card/buy/') !== -1) {
//        console.log('on nordstrom e gift card page');
    if (document.cookie.indexOf('gclink') !== -1) {
//            console.log('has cookie');
        GiftCardHub_eGiftCardLink();
//            console.log('created tag');
        document.cookie = encodeURIComponent('gclink') + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=nordstrom.com";
//            console.log('set cookie');
    }
}