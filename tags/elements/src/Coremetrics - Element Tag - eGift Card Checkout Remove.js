$('#cart-content > div > div.cart-item-actions > ul > li:nth-child(2) > a').on('click', function() {
    window.clickstream.fire('element', ['cm','sp'], 'Checkout Remove', 'Gift Card');
});