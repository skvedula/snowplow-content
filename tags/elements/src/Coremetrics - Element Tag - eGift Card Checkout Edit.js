$('#cart-content > div > div.cart-item-actions > ul > li:nth-child(1) > a').on('click', function() {
    window.clickstream.fire('element', ['cm','sp'], 'Checkout Edit', 'Gift Card');
});