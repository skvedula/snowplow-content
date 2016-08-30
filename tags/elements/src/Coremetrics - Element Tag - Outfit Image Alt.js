window.nord.core.dispatcher.register(function (payload) {

if (payload.action === window.nord.core.actions.GalleryNavigate && payload.type === 'Image') {
	window.clickstream.fire('element', ['cm','sp'], 'Image Alt {'+payload.index+'}', 'Outfit Page', digitalData.outfit.styleNumber, payload.styleNumber, null, 17, 43);
}

});