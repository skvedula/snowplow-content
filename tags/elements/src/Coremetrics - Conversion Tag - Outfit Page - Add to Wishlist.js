window.nord.core.dispatcher.register(function (payload) {
	if (payload.action === window.nord.core.actions.ProductWishlistButtonClick){
		window.clickstream.fire('conversion', ['cm','sp'], 'Add to Wish List','2','Wish List', payload.styleNumber, digitalData.shopper.shopperId, digitalData.outfit.styleNumber);
	}
});