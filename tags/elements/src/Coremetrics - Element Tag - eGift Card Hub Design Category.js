$(document).on('mouseup', '#fp-nav > li > a', function() {
    window.clickstream.fire('element', ['cm','sp'], $(this).text(), 'Gift Card');
});
