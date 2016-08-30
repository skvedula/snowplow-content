window.nord.core.dispatcher.register(function (payload) {

if (payload.action === window.nord.core.actions.SwipeGalleryAnimationComplete) {
    var altIndex =payload.index+1;
    window.clickstream.fire('element', ['cm','sp'], 'Image Alt {'+altIndex+'}', 'Outfit Page', digitalData.outfit.styleNumber, null, null, 17);
}
});