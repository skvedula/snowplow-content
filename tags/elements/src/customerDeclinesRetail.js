$(document).on('mouseup', '#ctl00_mainContentPlaceholder_DeclineThisProductLink', function() {
    window.clickstream.fire('element', ['cm','sp'], 'Retail Credit Offer Decline','Apply and Buy');
});