$('#order-add-another').on('mouseup', function() {
    window.clickstream.fire('element', ['cm','sp'], 'Add Another', 'Gift Card');
});