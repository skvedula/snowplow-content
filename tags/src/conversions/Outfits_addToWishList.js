export default function Outfits_addToWishList() {
	window.nord.core.dispatcher.register(function (payload, runAsTask) {
		if (runAsTask) return false;
		if (payload.action === window.nord.core.actions.ProductWishlistButtonClick){
			var attrArray = [];
			attrArray["1"] = payload.styleNumber;
			attrArray["2"] = digitalData.shopper.shopperId;
			attrArray["3"] = digitalData.outfit.styleNumber;
	 
			cmCreateConversionEventTag('Add to Wish List','2','Wish List',null,mmcore.nord.BTUtils.createAttributeString(attrArray, 43));
			spCreateConversionEventTag('Add to Wish List','2','Wish List',null,mmcore.nord.BTUtils.createAttributeString(attrArray, 43));
		}
   });
}