window.nord.core.dispatcher.register(function (payload) {

if (payload.action === window.nord.core.actions.ProductWishlistButtonClick) {
    window.clickstream.fire('element', ['cm','sp'], 'Wishlist', 'Outfit Page', digitalData.outfit.styleNumber, payload.styleNumber, null, 17, 43);
}

});