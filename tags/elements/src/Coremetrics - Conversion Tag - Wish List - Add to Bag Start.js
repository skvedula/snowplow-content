    var attrArray = [];
    attrArray["1"] = '[[Wish List ATB Item Style Number]]';
    attrArray["2"] = '[[Wish List Owner Shopper ID]]';    
    mmcore.SetCookie('wishlistATB', window.clickstream.attrs(attrArray, 2));
    window.clickstream.fire('conversion', ['cm','sp'], 'Add to from Wish List','1','Wish List', '[[Wish List ATB Item Style Number]]', '[[Wish List Owner Shopper ID]]');