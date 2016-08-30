$(document).on('mouseup', '#ICA_Declined > div > ul > li > a.back-to-shopping-link', function() {
    if(localStorage.getItem('cardType') === 'Credit')
    {
        if($("#ctl00_mainContentPlaceholder_CreditApplicationType").length > 0) {
            window.clickstream.fire('element', ['cm','sp'], 'Decline Back to Shopping','Apply and Buy');
        }
    }
    localStorage.removeItem('cardType');
});