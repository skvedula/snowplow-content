$('#order-paypal > img').on('click', function() {
    window.clickstream.fire('element', ['cm','sp'], 'Checkout Paypal', 'Gift Card');
});

$('#cart-paypal > img').on('click', function() {
	window.clickstream.fire('element', ['cm','sp'], 'Checkout Paypal', 'Gift Card');
});