try {
    window.clickstream.fire('element', ['cm','sp'], 'Edit Payment' + (/paypal.com/.test(document.referrer) && /token/.test(window.location.search) ? ' - PayPal' : ''), 'FAST AND EASY CHECKOUT');
}
catch(e) { console.log(e); }