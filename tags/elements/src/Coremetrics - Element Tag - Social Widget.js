window.nord.core.dispatcher.register(function (payload) {

if (payload.action === window.nord.core.actions.ProductShareButtonClick ) {
    window.clickstream.fire('element', ['cm','sp'], 'Social - {'+payload.type+'}', 'Outfit Page', digitalData.outfit.styleNumber, payload.styleNumber, null, 17, 43);
}

});