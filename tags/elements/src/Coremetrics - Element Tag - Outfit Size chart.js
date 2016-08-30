window.nord.core.dispatcher.register(function (payload) {

if (payload.action === window.nord.core.actions.ProductSizeChartShow) {
    window.clickstream.fire('element', ['cm','sp'], 'Size Chart', 'Outfit Page', digitalData.outfit.styleNumber, payload.styleNumber, null, 17, 43);
}

});