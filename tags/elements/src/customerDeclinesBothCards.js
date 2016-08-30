$(document).on('mouseup', '#ctl00_mainContentPlaceholder_DeclineBothProductsLink', function() {
    window.clickstream.fire('element', ['cm','sp'], 'Visa Credit Offer Decline','Apply and Buy');
});