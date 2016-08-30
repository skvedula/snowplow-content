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
    var error = function() {
        window.clickstream.fire('element', ['cm','sp'], 'Check Balance Error', 'Gift Card Hub');
    };

    checkError('#ctl00_mainContentPlaceHolder_divGiftCardBalanceCheckOn > div.ngcError')();
})();
