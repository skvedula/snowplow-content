window.nord.core.dispatcher.register(function (payload) {

if (payload.action === window.nord.core.actions.SwipeGalleryZoomModalRelease || payload.action === window.nord.core.actions.SwipeGalleryZoomModalTap) {
    window.clickstream.fire('element', ['cm','sp'], 'Image Zoom', 'Outfit Page', digitalData.outfit.styleNumber, null, null, 17);
}

});