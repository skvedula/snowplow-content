var tag_id = '3806725';
if (window.SOASTA) window.SOASTA.abTest = 'snowplow';

var prod = (['shop.nordstrom.com', 'secure.nordstrom.com', 'm.shop.nordstrom.com', 'm.secure.nordstrom.com', 'about.nordstrom.com'].indexOf(window.location.hostname) > -1 ? 1 : 0)
	, mobile = (/^m/.test(window.location.hostname) ? 1 : 0)
	, env_vars = {
		collector: (prod ? 'p.nordstromdata.com' : 't.nordstromdata.com')
		, appId: (mobile ? 'nord.mow' : 'nord.com')
	}
;

function loadSP() {
	// sp.js
	(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
	p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
	};p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
	n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","https://images.nordstromdata.com/js/sp/2.6.2/sp.js","snowplow"));

	snowplow("newTracker", 'nord' + (prod ? '_prod' : '_dev'), env_vars.collector, 
		{
			appId: env_vars.appId,
			cookieDomain: ".nordstrom.com",
			cookieName: "_sp_",
			pageUnloadTimer: 0,
			useCookies: true,
			bufferSize: 5,
			encodeBase64: false,
			forceSecureTracker: true,
			respectDoNotTrack: true,
			contexts: {
				webPage: false,
				performanceTiming: false,
				gaCookies: false
			}
		}
	);

	var MMP, WCM, Legacy, sp_uid;
	var page_id = null
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
		, experiment = {}		
		;

	var mkt_source = ""
        , mkt_medium = ""
        , mkt_campaign = ""
        , mkt_term = ""
        , mkt_content = ""
        , mkt_cm_em = ""
        , mkt_cm_camp_name = ""
        , mkt_cm_camp_uid = ""
        , mkt_rkg_id = ""
        , mkt_linkshare_siteid = "";	

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
			rack = (info.saleType && info.saleType === 'Rack' ? 'N' : 'Y');
			available = (info.isAvailable ? 'Y' : 'N');
			experiment = { experimentId : digitalData.elwin.elwinId,
                                experimentData : digitalData.elwin.elwinData }
		}
		sp_uid = (digitalData.shopper && digitalData.shopper.shopperId ? digitalData.shopper.shopperId : '');
		page_id = (function() {
			if (digitalData.product && digitalData.product.productInfo) return 'PRODUCT: ' + brand_name + ' ' + product_name + (digitalData.product.productInfo.styleNumber ? ' (' + digitalData.product.productInfo.styleNumber + ')' : 'PRODUCT: ' + document.title.replace(' | Nordstrom', ''));
			else return document.title.replace(' | Nordstrom', '');
		})();
		page_category = (function() {
			if (digitalData.product && digitalData.product.category && digitalData.product.category.parentCategory) return digitalData.product.category.parentCategory;
			else if ('category' in digitalData.page.category) return digitalData.page.category.category;
			else return null;
		})();
		page_template = 'MMP';
		style_number = (digitalData.product && digitalData.product.productInfo && digitalData.product.productInfo.styleNumber ? digitalData.product.productInfo.styleNumber : null);
		is_recognized = (digitalData.shopper && digitalData.shopper.authenticatedState && digitalData.shopper.authenticatedState !== 'Anonymous' ? 'Y' : 'N');
		search_results_count = (digitalData.page.pageInfo && digitalData.page.pageInfo.onsiteSearchResults ? digitalData.page.pageInfo.onsiteSearchResults : null);
	}
	else if(WCM){
		sp_uid = (nord.config.settings.shopper && nord.config.settings.shopper.id ? nord.config.settings.shopper.id : '');
		page_id = (nord.config.settings.analytics && nord.config.settings.analytics.pageId ? nord.config.settings.analytics.pageId : document.title.replace(' | Nordstrom', ''));
		page_category = (nord.config.settings.analytics && nord.config.settings.analytics.categoryPath ? nord.config.settings.analytics.categoryPath : null);
		page_template = 'WCM';
		is_recognized = (nord.config.settings.shopper && nord.config.settings.shopper.firstName && nord.config.settings.shopper.firstName !== '' ? 'Y' : 'N');
	}
	else if(Legacy){
		sp_uid = (PageParameters.shopperId ? PageParameters.shopperId : '');
		page_id = (PageParameters.pageId ? PageParameters.pageId : document.title.replace(' | Nordstrom', ''));
		page_category = (PageParameters.categoryString ? PageParameters.categoryString : PageParameters.ioCoremetricsPageId ? PageParameters.ioCoremetricsPageId : PageParameters.PageType ? PageParameters.PageType : null);
		page_template = (PageParameters.templateName ? PageParameters.templateName : 'Legacy');
		is_recognized = (PageParameters.shopper && PageParameters.shopper.firstName && PageParameters.shopper.firstName !== '' ? 'Y' : 'N');
		search_term = (bt_parameter('keyword') !== '' ? bt_parameter('keyword') : null);
		search_results_count = (document.querySelector('div.product-results-count span.count') ? parseInt(document.querySelector('div.product-results-count span.count').innerHTML, 10) : null);
	}
	else {
		sp_uid = (['shop.nordstrom.com', 'secure.nordstrom.com'].indexOf(window.location.hostname) > -1 ? bt_cookie('nordstrom').replace(/^shopperid\=/, '').replace(/\&.*$/, '') : bt_cookie('nordstromdev').replace(/^shopperid\=/, '').replace(/\&.*$/, ''));
		if (document.location.pathname === '/os') {
			page_id = 'Fast and Easy';
			page_category = 'Fast and Easy';
			page_template = 'Fast and Easy';
		}
		page_id = document.title.replace(' | Nordstrom', '');
	}
	sp_uid = (sp_uid !== null && sp_uid !== '' && window._$cV1 && window._$cV1.indexOf('welcome') === -1 && window._$cV1.indexOf('tagmanager') === -1 ? sp_uid + '_' + window._$cV1 : sp_uid);

    var split_query = (window.location.href).split('&');
    for (var query in split_query) {
        if (split_query[query].indexOf('cm_mmc') >= 0) {
            var mmc_split = (split_query[query]).split('-_-');
            mkt_source = (mmc_split[0]).split('=')[1];
            mkt_medium = mmc_split[1];
            mkt_campaign = mmc_split[2];
            mkt_term = mmc_split[3];
        } else {
	         if (split_query[query].indexOf('cm_ven') >= 0) {
	            mkt_source = split_query[query];
	        } if (split_query[query].indexOf('cm_cat') >= 0) {
	            mkt_medium = split_query[query];
	        } if (split_query[query].indexOf('cm_pla') >= 0) {
	            mkt_campaign = split_query[query];
	        } if (split_query[query].indexOf('cm_ite') >= 0) {
	            mkt_term = split_query[query];
	        } if (split_query[query].indexOf('cm_em') >= 0) {
	            mkt_cm_em = (split_query[query]).split('=')[1];
	        } if (split_query[query].indexOf('Campaign') >= 0 || split_query[query].indexOf('campaign') >= 0 ) {
	            mkt_cm_camp_name = (split_query[query]).split('=')[1];
	        } if (split_query[query].indexOf('mcamp') >= 0) {
	            mkt_cm_camp_uid = (split_query[query]).split('=')[1];
	        } if (split_query[query].indexOf('rkg_id') >= 0) {
	            mkt_rkg_id = (split_query[query]).split('=')[1];
	        } if (split_query[query].indexOf('siteId') >= 0) {
	            mkt_linkshare_siteid = (split_query[query]).split('=')[1];
	        }
	    }
	}

	if ('snowplow' in window) {
		if (sp_uid) snowplow('setUserId', sp_uid);
		snowplow('enableLinkClickTracking', null, null, true);
		if (window.digitalData && digitalData.product && digitalData.product.productInfo && window.location.href.indexOf('cm_') > -1) {
			snowplow(
				'trackPageView',
				page_id,
				[
					{
						schema: 'iglu:com.nordstrom/page_view_attrs/jsonschema/1-0-0',
						data: {
							page_url: window.location.href
							, page_category: (search_term ? '1.6' : page_category)
							, page_template: page_template
							, style_number: style_number
							, is_recognized: is_recognized
							, search_term: search_term
							, search_results_count: search_results_count
							, tag_id: tag_id
							, experiment : experiment
						}
					},
					{
						schema: 'iglu:com.nordstrom/product_view_attrs/jsonschema/1-0-0',
						data: {
							page_url: window.location.href
							, product_id: product_id
							, product_category: page_category
							, style_number: style_number
							, product_name: product_name
							, on_sale: on_sale
							, brand_name: brand_name
							, fit_value: fit_value
							, rack: rack
							, available: available
							, tag_id: tag_id
						}
					},
					{
						schema: 'iglu:com.nordstrom/marketing_attrs/jsonschema/0-0-1',
						data: {
							mkt_source: mkt_source
							, mkt_medium: mkt_medium
							, mkt_campaign: mkt_campaign
							, mkt_term: mkt_term
							, mkt_content: mkt_content
							, mkt_cm_camp_name: mkt_cm_camp_name
							, mkt_cm_camp_uid: mkt_cm_camp_uid
							, mkt_rkg_id: mkt_rkg_id
							, mkt_linkshare_siteid: mkt_linkshare_siteid
							, mkt_cm_em: mkt_cm_em
						}
					}
					
				]
			);
		}
		else if (window.digitalData && digitalData.product && digitalData.product.productInfo) {
			snowplow(
				'trackPageView',
				page_id,
				[
					{
						schema: 'iglu:com.nordstrom/page_view_attrs/jsonschema/1-0-0',
						data: {
							page_url: window.location.href
							, page_category: (search_term ? '1.6' : page_category)
							, page_template: page_template
							, style_number: style_number
							, is_recognized: is_recognized
							, search_term: search_term
							, search_results_count: search_results_count
							, tag_id: tag_id
							, experiment : experiment
						}
					},
					{
						schema: 'iglu:com.nordstrom/product_view_attrs/jsonschema/1-0-0',
						data: {
							page_url: window.location.href
							, product_id: product_id
							, product_category: page_category
							, style_number: style_number
							, product_name: product_name
							, on_sale: on_sale
							, brand_name: brand_name
							, fit_value: fit_value
							, rack: rack
							, available: available
							, tag_id: tag_id
						}
					}
				]
			);
		}
		else if (window.location.href.indexOf('cm_') > -1) {
			snowplow(
				'trackPageView',
				page_id,
				[
					{
						schema: 'iglu:com.nordstrom/page_view_attrs/jsonschema/1-0-0',
						data: {
							page_url: window.location.href
							, page_category: (search_term ? '1.6' : page_category)
							, page_template: page_template
							, style_number: style_number
							, is_recognized: is_recognized
							, search_term: search_term
							, search_results_count: search_results_count
							, tag_id: tag_id
							, experiment : experiment
						}
					},
					{
						schema: 'iglu:com.nordstrom/marketing_attrs/jsonschema/0-0-1',
						data: {
							mkt_source: mkt_source
							, mkt_medium: mkt_medium
							, mkt_campaign: mkt_campaign
							, mkt_term: mkt_term
							, mkt_content: mkt_content
							, mkt_cm_camp_name: mkt_cm_camp_name
							, mkt_cm_camp_uid: mkt_cm_camp_uid
							, mkt_rkg_id: mkt_rkg_id
							, mkt_linkshare_siteid: mkt_linkshare_siteid
							, mkt_cm_em: mkt_cm_em
						}
					}
				]
			);
		}
		else {
			snowplow(
				'trackPageView',
				page_id,
				[
					{
						schema: 'iglu:com.nordstrom/page_view_attrs/jsonschema/1-0-0',
						data: {
							page_url: window.location.href
							, page_category: page_category
							, page_template: page_template
							, style_number: style_number
							, is_recognized: is_recognized
							, search_term: (bt_parameter('keyword') !== '' ? bt_parameter('keyword') : null)
							, search_results_count: search_results_count
							, tag_id: tag_id
							, experiment : experiment
						}
					}
				]
			);
		}


		window.sp_pv = 1;
		if (document.createEvent) {
			var event = document.createEvent('Event');
			event.initEvent('sp_pv', true, true);
			document.dispatchEvent(event);
		}
	}
}

function mustExecute(func, numTrys) {
  return function () {
    try {
      func();
    } catch (e) {
      if (numTrys === 0) {
        loadSP();
      }
      setTimeout(mustExecute(func, numTrys - 1), 250);
    }
  };
}

function CMloaded() {
	if (typeof cmSetClientID === 'function') {
		mustExecute(function() {
			if (typeof window._$cV1 !== "string") throw 'no coreid6';
			else {
				loadSP();
				return true;
			}
		}, 10)();
	}
	else setTimeout(CMloaded, 250);
}
CMloaded();
