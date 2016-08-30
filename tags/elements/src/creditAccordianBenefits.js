$(document).on('mouseup', '#apply-buy-app-header > nav > section > h3 > a', function() {
    window.clickstream.fire('element', ['cm','sp'], 'CreditApp Benefits Accordian','Apply and Buy');
});