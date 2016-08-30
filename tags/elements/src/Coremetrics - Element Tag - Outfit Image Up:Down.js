window.nord.core.dispatcher.register(function (payload) {

if (payload.action === window.nord.core.actions.GalleryThumbnailCarouselNext || payload.action === window.nord.core.actions.GalleryThumbnailCarouselPrevious) {
    window.clickstream.fire('element', ['cm','sp'], 'Image Alt Carousel Browse', 'Outfit Page', digitalData.outfit.styleNumber, payload.styleNumber, null, 17, 43);
}

});