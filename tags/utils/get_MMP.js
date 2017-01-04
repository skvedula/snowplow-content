export default function get_MMP() {
	var sp_uid, page_id, page_category, page_template, is_recognized, product_id, product_name, on_sale, brand_name, fit_value, rack, available, experiment, percentage_off, price_match, preorder, style_number, search_term, search_results_count, authenticated_state;
	if (window.digitalData) {
		return (function() {
			if (digitalData.product && digitalData.product.productInfo) {
				var info = digitalData.product.productInfo, isLoggedIn = (digitalData.shopper && digitalData.shopper.authenticatedState && digitalData.shopper.authenticatedState === 'Authenticated' ? 1 : 0);
				product_id = (info.productID ? info.productID.toString() : window.location.pathname.split('/')[window.location.pathname.split('/').length-1]);
				product_name = (info.productName ? info.productName.replace('<sup>®</sup>', '') : null);
				on_sale = (info.saleType && info.saleType === 'Regular' ? 'N' : 'Y');
				brand_name = (info.brandName ? info.brandName.replace('<sup>®</sup>', '') : null);
				if (info.fitRecommendation && info.fitRecommendation.trueFitEligible) {
					fit_value = "TF";
					var trueFitRecommendation = info.fitRecommendation.trueFitRecommendation;
					if (!isLoggedIn) fit_value += "_U";
					else if (trueFitRecommendation && isLoggedIn) fit_value += "_RR";
					else if (!trueFitRecommendation && isLoggedIn) fit_value += "_NR";
				}
				rack = (info.saleType && info.saleType === 'Rack' ? 'Y' : 'N');
				available = (info.isAvailable ? 'Y' : 'N');
				experiment = { 
					experimentId : digitalData.elwin.elwinId,
					experimentData : digitalData.elwin.elwinData
				};
				percentage_off = (window.digitalData.product.productInfo.percentageOff !== null ? window.digitalData.product.productInfo.percentageOff.replace('%', '') : '0');
				price_match = (window.digitalData.product.productInfo.banners && window.digitalData.product.productInfo.banners[0] === 'PriceMatch' ? 'Y' : 'N');
				preorder = (window.digitalData.product.productInfo.banners && window.digitalData.product.productInfo.banners[0] === 'PreOrder' ? 'Y' : 'N');
			}
			sp_uid = (digitalData.shopper && digitalData.shopper.shopperId ? digitalData.shopper.shopperId : '');
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
			search_term = (digitalData.page.pageInfo && digitalData.page.pageInfo.onsiteSearchTerm ? digitalData.page.pageInfo.onsiteSearchTerm : bt_parameter('keyword'));
			search_results_count = (digitalData.page.pageInfo && digitalData.page.pageInfo.onsiteSearchResults ? digitalData.page.pageInfo.onsiteSearchResults : null);
			if (search_term && search_results_count) page_id = 'RESULTS: ' + search_term;
		    authenticated_state = (digitalData && digitalData.shopper && digitalData.shopper.authenticatedState && digitalData.shopper.authenticatedState.toLowerCase() === 'authenticated' ? 'Y' : 'N');
		})();
	}
	else return false;
}