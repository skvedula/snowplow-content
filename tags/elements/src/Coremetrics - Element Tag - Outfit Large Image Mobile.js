window.nord.core.dispatcher.register(function (payload) {

if (payload.action === window.nord.core.actions.SwipeGalleryZoomModalShow) {    
    window.clickstream.fire('element', ['cm','sp'], 'Large Image', 'Outfit Page', digitalData.outfit.styleNumber, null, null, 17);
}

});