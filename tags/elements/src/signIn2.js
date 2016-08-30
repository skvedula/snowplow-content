(function() {
    if (typeof mmcore === 'object' && typeof mmcore.GetCookie ===  'function' && mmcore.GetCookie('cardOffer') && mmcore.nord.PC.read('auth') === 'LI'){
       if (mmcore.GetCookie('registrantInfo')) window.clickstream.fire('element', ['cm','sp'], 'Sign In', 'Apply and Buy');
        mmcore.SetCookie('cardOffer',  -1);
    }
    })();
