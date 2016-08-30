window.nord.core.dispatcher.register(function(payload) {

    if (payload.action === window.nord.core.actions.ProductDetailsAndCareLinkClick) {
        if(payload.title.indexOf('Fit Fundamentals') > -1)
        {
            window.clickstream.fire('element', ['cm','sp'], 'Fit Fundamentals', 'Outfit Page', digitalData.outfit.styleNumber, payload.styleNumber, null, 17, 43);
            else if(payload.title.indexOf('Athletic Shoe Fit Guide')>-1){
                 window.clickstream.fire('element', ['cm','sp'], 'Athletic Shoe Fit Guide', 'Outfit Page', digitalData.outfit.styleNumber, payload.styleNumber, null, 17, 43);
                }
            else
            {
                window.clickstream.fire('element', ['cm','sp'], 'Product Learn More', 'Outfit Page', digitalData.outfit.styleNumber, payload.styleNumber, null, 17, 43);
                }
    }

});