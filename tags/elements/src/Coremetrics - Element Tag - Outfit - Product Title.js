    window.nord.core.dispatcher.register(function (payload) {
        if (payload.action === window.nord.core.actions.ProductTitleClick) {
    window.clickstream.fire('element', ['cm','sp'], 'Product - Name Link', 'Outfit Page', digitalData.outfit.styleNumber, payload.styleNumber, null, 17, 43);
}

});