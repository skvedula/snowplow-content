window.onload = (function() {
    if ( window.localStorage.getItem('cardType') == 'visa') {
        window.clickstream.fire("page_view", ["cm"], "Confrim Visa", " Apply & Buy");
        window.clickstream.fire("page_view", ["sp"], "Confirm Visa", " Apply & Buy");
        window.clickstream.fire('conversion', ['cm','sp'], 'Visa Offer', 2, 'Apply and Buy');
        localStorage.removeItem('cardType');
    }
    if (window.localStorage.getItem('cardType') == 'retail') {
        window.clickstream.fire('conversion', ['cm','sp'], 'Retail Offer', 2, 'Apply and Buy');
         localStorage.removeItem('cardType');
    }

    if (window.localStorage.getItem('cardType') == 'debit') {
        window.clickstream.fire('conversion', ['cm','sp'], 'Debit Offer', 2, 'Apply and Buy');
    }
}());