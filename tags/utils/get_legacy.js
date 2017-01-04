export default function get_legacy() {
	var sp_uid, page_id, page_category, page_template, is_recognized, search_term, search_results_count, authenticated_state;
	if (window.PageParameters) {
		return (function() {
			sp_uid = (PageParameters.shopperId ? PageParameters.shopperId : null);
			page_id = (function() {
				if (/ShoppingBag/.test(window.location.pathname)) {
					var bag = document.querySelectorAll('#ctl00_mainContentPlaceHolder_shoppingBagList_orderItemUpdatePanel .itemrowItemNum');
					 //get all the items in save for later
					var sfl = document.querySelectorAll('#ctl00_mainContentPlaceHolder_saveForLaterList_orderItemUpdatePanel .itemrowItemNum');
					var bag_empty = (bag.length > 0 ? '' : 'EMPTY_');
					var sfl_empty = (sfl.length > 0 ? '' : 'EMPTY');
					return '/CHECKOUT/SHOPPINGBAG - ' + bag_empty + 'SFL' + sfl_empty;
				}
				else if (/OrderConfirmation/.test(window.location.pathname)) return '/CHECKOUT/ORDER RECEIPT';
				else return (PageParameters.pageId ? PageParameters.pageId : document.title.replace(' | Nordstrom', ''));
			})();
			page_category = (PageParameters.categoryString ? PageParameters.categoryString : PageParameters.ioCoremetricsPageId ? PageParameters.ioCoremetricsPageId : PageParameters.PageType ? PageParameters.PageType : null);
			page_template = (PageParameters.templateName ? PageParameters.templateName : 'Legacy');
			is_recognized = (PageParameters.shopper && PageParameters.shopper.firstName && PageParameters.shopper.firstName !== '' ? 'Y' : 'N');
			search_term = (bt_parameter('keyword') !== '' ? bt_parameter('keyword') : null);
			search_results_count = (document.querySelector('div.product-results-count span.count') ? parseInt(document.querySelector('div.product-results-count span.count').innerHTML, 10) : null);
			authenticated_state = (PageParameters && PageParameters.isLoggedIn ? 'Y' : 'N');
		})();
	}
	else return false;
}