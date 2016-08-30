 
    if (mmcore.GetCookie('wishlistATB') != '') {
        window.clickstream.fire('conversion', ['cm','sp'], 'Add to from Wish List','2','Wish List',mmcore.GetCookie('wishlistATB'));
        mmcore.SetCookie('wishlistATB',  -1);
    }
 