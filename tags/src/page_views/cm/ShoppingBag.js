export default function ShoppingBag() {
	var bagItemCount = $('#ctl00_mainContentPlaceHolder_shoppingBagList_orderItemRepeater_ctl00_orderItemDiv').find('.item-module').length,
	    sflItemCount = $('#ctl00_mainContentPlaceHolder_saveForLaterList_orderItemUpdatePanel').find('.item-module').length;
	if (bagItemCount < 1) {
	    (function() {
	        (sflItemCount > 0) ? cmCreatePageviewTag("/CHECKOUT/SHOPPINGBAG - EMPTY_SFL", "/checkout/"): cmCreatePageviewTag("/CHECKOUT/SHOPPINGBAG - EMPTY_SFLEMPTY", "/checkout/");
	    }());
	} else {
	    (function() {
	        (sflItemCount < 1) ? cmCreatePageviewTag("/CHECKOUT/SHOPPINGBAG - SFLEMPTY", "/checkout/"): cmCreatePageviewTag("/CHECKOUT/SHOPPINGBAG - SFL", "/checkout/");
	    }());
	}
}