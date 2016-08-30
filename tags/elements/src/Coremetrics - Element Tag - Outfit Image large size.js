window.nord.core.dispatcher.register(function (payload) {

if (payload.action === window.nord.core.actions.GalleryModalShow) {
    window.clickstream.fire('element', ['cm','sp'], 'Large Image', 'Outfit Page', digitalData.outfit.styleNumber, payload.styleNumber, null, 17, 43);
}

});