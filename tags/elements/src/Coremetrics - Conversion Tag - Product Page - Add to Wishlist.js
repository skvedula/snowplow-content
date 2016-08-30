window.nord.core.dispatcher.register(function (payload) {
	if (payload.action === window.nord.core.actions.ProductWishlistButtonClick){
		window.clickstream.fire('conversion', ['cm','sp'], 'Add to Wish List','1','Wish List',digitalData.product.productInfo.styleNumber,digitalData.shopper.shopperId,null,1,2);
	}
});