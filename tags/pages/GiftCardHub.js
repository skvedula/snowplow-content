import GiftCardHub_errors from "../src/elements/GiftCardHub_errors";
import GiftCardHub_giftCardLink from "../src/elements/GiftCardHub_giftCardLink";
import GiftCardHub_checkBalance from "../src/elements/GiftCardHub_checkBalance";

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

document.querySelector('#ctl00_mainContentPlaceHolder_NgcMainPanel > div > div.egift-cards > p:nth-child(3) > a').addEventListener('click', function() {
    GiftCardHub_giftCardLink('digital');
});

document.querySelector('#ctl00_mainContentPlaceHolder_NgcMainPanel > div > div.gift-cards > p:nth-child(3) > a').addEventListener('click', function() {
    GiftCardHub_giftCardLink('plastic');
});

document.querySelector('#ctl00_mainContentPlaceHolder_NgcMainPanel > div > div.gift-cards-for-business > p:nth-child(3) > a').addEventListener('click', function() {
    GiftCardHub_giftCardLink('business');
});

document.querySelector('#ctl00_mainContentPlaceHolder_checkGiftCardBalance').addEventListener('click', function() {
	setTimeout(GiftCardHub_checkBalance, 2000);
});