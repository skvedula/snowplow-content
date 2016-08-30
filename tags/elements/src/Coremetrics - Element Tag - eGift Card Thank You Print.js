$('#confirm-print').on('click', function() {
    window.clickstream.fire('element', ['cm','sp'], 'Thank You Print', 'Gift Card');
});