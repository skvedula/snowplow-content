window.nord.core.dispatcher.register(function (payload) {

if (payload.action === window.nord.core.actions.GalleryNavigate && payload.type === 'Video') {
    window.clickstream.fire('element', ['cm','sp'], 'Video Alt - {360}', 'Outfit Page', digitalData.outfit.styleNumber, payload.styleNumber, null, 17, 43);
}

});