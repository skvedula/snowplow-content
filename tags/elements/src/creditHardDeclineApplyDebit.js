$(document).on('mouseup', '#ICA_Declined > p:nth-child(7) > a', function() {
    if(localStorage.getItem('cardType') === 'Credit')
    {
        window.clickstream.fire('element', ['cm','sp'], 'Apply Button - Debit','Apply and Buy');
        localStorage.setItem('cardType', 'Debit');
    }
});