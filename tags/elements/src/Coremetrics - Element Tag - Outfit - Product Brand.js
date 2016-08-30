window.nord.core.dispatcher.register(function(payload) {

    if (payload.action === window.nord.core.actions.ProductBrandTitleClick) {
        window.clickstream.fire('element', ['cm','sp'], 'Brand', 'Product Page', digitalData.outfit.styleNumber, payload.styleNumber, null, 17, 43);
    }
});