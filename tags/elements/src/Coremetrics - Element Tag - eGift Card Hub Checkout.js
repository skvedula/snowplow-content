$('#order-check-out').on('mouseup', function() {
    window.clickstream.fire('element', ['cm','sp'], 'Checkout', 'Gift Card');
});

$('#cart-check-out').on('click', function() {
	window.clickstream.fire('element', ['cm','sp'], 'Checkout', 'Gift Card');
});