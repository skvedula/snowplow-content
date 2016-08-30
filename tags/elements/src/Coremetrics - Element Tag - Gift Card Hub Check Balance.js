(function() {
    var checkbal = function() {
        var t = 'The current balance on Gift Card number';
        var msgNode = document.querySelector('#ctl00_mainContentPlaceHolder_lblGiftCardMessage');
        if (!document.querySelector('#ctl00_mainContentPlaceHolder_divGiftCardBalanceCheckOn > div.ngcError') && msgNode.textContent.substr(0, t.length) === t) {
            window.clickstream.fire('element', ['cm','sp'], 'Check Balance', 'Gift Card');
        }
    };
    $(document).on('click', '#ctl00_mainContentPlaceHolder_checkGiftCardBalance', function() {
        setTimeout(checkbal, 2000);
    });
})();