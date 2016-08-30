debugger
function loadSP() {
	var MMP, WCM, Legacy, sp_uid;
	var tag_id = '3464019'
		, page_schema = 'iglu:com.nordstrom/pageview_attrs/jsonschema/0-0-7'
		, product_schema = 'iglu:com.nordstrom/product_view_attrs/jsonschema/0-0-2'
		, page_url = window.location.href
		, page_id = null
		, page_category = null
		, page_template = null
		, style_number = null
		, is_recognized = 'N'
		, search_term = null
		, search_results_count = null
		, product_id = null
		, product_name = null
		, on_sale = null
		, brand_name = null
		, base_copy_split = null
		, fit_value = null
		, rack = null
		, available = null
		, googClientID = ''
		, googUserID = ''
		, experiment = {}		
		;

	if (window.digitalData && digitalData.page && digitalData.page.category && digitalData.page.category.pageType) MMP = 1;
	else if (window.nord && nord.config && nord.config.settings && nord.config.settings.analytics && nord.config.settings.analytics.pageTemplate === 'WCM') WCM = 1;
	else if (window.PageParameters) Legacy = 1;

	if(MMP){  // product_id, product_name, on_sale, brand_name, fit_value, rack, available
		if (digitalData.product && digitalData.product.productInfo) {
			var info = digitalData.product.productInfo, isLoggedIn = (digitalData.shopper && digitalData.shopper.authenticatedState && digitalData.shopper.authenticatedState === 'Authenticated' ? 1 : 0);
			product_id = (info.productID ? info.productID.toString() : window.location.pathname.split('/')[window.location.pathname.split('/').length-1]);
			product_name = (info.productName ? info.productName : null);
			on_sale = (info.saleType && info.saleType === 'Regular' ? 'N' : 'Y');
			brand_name = (info.brandName ? info.brandName : null);
			if (info.fitRecommendation && info.fitRecommendation.trueFitEligible) {
				fit_value = "TF";
				var trueFitRecommendation = info.fitRecommendation.trueFitRecommendation;
				if (!isLoggedIn) fit_value += "_U";
				else if (trueFitRecommendation && isLoggedIn) fit_value += "_RR";
				else if (!trueFitRecommendation && isLoggedIn) fit_value += "_NR";
			}
			rack = (document.getElementById('rack-banner') !== null ? 'true' : 'false');
			available = (info.isAvailable ? 'Y' : 'N');
			experiment = { 
				experimentId : digitalData.elwin.elwinId,
				experimentData : digitalData.elwin.elwinData
			};
			percentage_off = (window.digitalData.product.productInfo.percentageOff !== null ? window.digitalData.product.productInfo.percentageOff.replace('%', '') : '0');
			price_match = (window.digitalData.product.productInfo.banners && window.digitalData.product.productInfo.banners[0] === 'PriceMatch' ? 'Y' : 'N');
			preorder = (window.digitalData.product.productInfo.banners && window.digitalData.product.productInfo.banners[0] === 'PreOrder' ? 'Y' : 'N');
		}
		sp_uid = (digitalData.shopper && digitalData.shopper.shopperId ? digitalData.shopper.shopperId : null);
		page_id = (function() {
			if (digitalData.product && digitalData.product.productInfo) return 'PRODUCT: ' + brand_name + ' ' + product_name + (digitalData.product.productInfo.styleNumber ? ' (' + digitalData.product.productInfo.styleNumber + ')' : 'PRODUCT: ' + document.title.replace(' | Nordstrom', ''));
			else if (digitalData.outfit) return 'OUTFIT: ' + digitalData.outfit.styleName + ' (OT' + digitalData.outfit.outfitID + ')';
			else return document.title.replace(' | Nordstrom', '');
		})();
		page_category = (function() {
			if (digitalData.product && digitalData.product.category && digitalData.product.category.parentCategory) return digitalData.product.category.parentCategory;
			else if (digitalData.outfit && digitalData.outfit.parentCategory) return digitalData.outfit.parentCategory;
			else if (digitalData.page.category) return digitalData.page.category.category;
			else return null;
		})();
		page_template = 'MMP';
		style_number = (digitalData.product && digitalData.product.productInfo && digitalData.product.productInfo.styleNumber ? digitalData.product.productInfo.styleNumber : null);
		is_recognized = (digitalData.shopper && digitalData.shopper.authenticatedState && digitalData.shopper.authenticatedState !== 'Anonymous' ? 'Y' : 'N');
		search_results_count = (digitalData.page.pageInfo && digitalData.page.pageInfo.onsiteSearchResults ? digitalData.page.pageInfo.onsiteSearchResults : null);
	}
	else if(WCM){
		sp_uid = (nord.config.settings.shopper && nord.config.settings.shopper.id ? nord.config.settings.shopper.id : null);
		page_id = (nord.config.settings.analytics && nord.config.settings.analytics.pageId ? nord.config.settings.analytics.pageId : document.title.replace(' | Nordstrom', ''));
		page_category = (nord.config.settings.analytics && nord.config.settings.analytics.categoryPath ? nord.config.settings.analytics.categoryPath : null);
		page_template = 'WCM';
		is_recognized = (nord.config.settings.shopper && nord.config.settings.shopper.firstName && nord.config.settings.shopper.firstName !== '' ? 'Y' : 'N');
	}
	else if(Legacy){
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
	}
	else {
		sp_uid = (['shop.nordstrom.com', 'secure.nordstrom.com'].indexOf(window.location.hostname) > -1 ? bt_cookie('nordstrom').replace(/^shopperid\=/, '').replace(/\&.*$/, '') : bt_cookie('nordstromdev').replace(/^shopperid\=/, '').replace(/\&.*$/, ''));
	}
	if(!sp_uid) sp_uid = (['shop.nordstrom.com', 'secure.nordstrom.com'].indexOf(window.location.hostname) > -1 ? bt_cookie('nordstrom').replace(/^shopperid\=/, '').replace(/\&.*$/, '') : bt_cookie('nordstromdev').replace(/^shopperid\=/, '').replace(/\&.*$/, ''));


	window.clickstream.load(['cm','sp','ga']);


	if(sp_uid)snowplow('setUserId', sp_uid);
	else return false;

	if (window.digitalData && digitalData.product && digitalData.product.productInfo) {
		clickstream.fire(
			'page_view', 
			['cm','sp','ga'], 
			{ 
				page_id: page_id
				, page_schema: page_schema
				, page_url: page_url
				, page_category: (search_term ? '1.6' : page_category)
				, page_template: page_template
				, style_number: style_number
				, is_recognized: is_recognized
				, search_term: search_term
				, search_results_count: search_results_count
				, tag_id: tag_id
				, experiment : experiment

				, product_schema: product_schema
				, product_id: product_id
				, product_category: page_category
				, product_name: product_name
				, on_sale: on_sale
				, brand_name: brand_name
				, fit_value: fit_value
				, rack: rack
				, available: available
				, percentage_off: percentage_off
				, price_match: price_match
				, preorder: preorder
			}
		);
	}
	else {
		clickstream.fire(
			'page_view', 
			['cm','sp','ga'], 
			{ 
				page_id: page_id
				, page_schema: page_schema
				, page_url: page_url
				, page_category: (search_term ? '1.6' : page_category)
				, page_template: page_template
				, style_number: style_number
				, is_recognized: is_recognized
				, search_term: search_term
				, search_results_count: search_results_count
				, tag_id: tag_id
				, experiment : experiment
			}
		);
	}
}
if(document.readyState === 'complete') {
	if(window.analytics_wrapped) loadSP();
	else document.addEventListener('analytics_wrapped', loadSP, false);
}
else {
	document.addEventListener( "DOMContentLoaded", function(){
		if(window.analytics_wrapped) loadSP();
		else document.addEventListener('analytics_wrapped', loadSP, false);
	}, false );
}