$(document).on('mouseup', '#ctl00_mainContentPlaceHolder_NgcMainPanel > div > div.gift-cards > p:nth-child(3) > a', function() {
    window.clickstream.fire('element', ['cm','sp'], 'Gift Card', 'Gift Card Hub');
});
