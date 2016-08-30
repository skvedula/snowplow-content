window.nord.core.dispatcher.register(function (payload) {

if (payload.action === window.nord.core.actions.GalleryWindowClick) {
    window.clickstream.fire('element', ['cm','sp'], 'Image Zoom', 'Outfit Page', digitalData.outfit.styleNumber, payload.styleNumber, null, 17, 43);
}

});