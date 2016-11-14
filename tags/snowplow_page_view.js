var tag_id = '3806725',
	MCP, 
	MMP, 
	WCM, 
	Legacy, 
	sp_uid, 
	mkt_params = parse_mkt_params(), 
	contexts = [], 
	page = {}, 
	product, 
	mkt,
	page_url = window.location.href,
	page_id = null,
	page_category = null,
	page_template = null,
	style_number = null,
	is_recognized = 'N',
	search_term = null,
	search_results_count = null,
	product_id = null,
	product_name = null,
	on_sale = null,
	brand_name = null,
	base_copy_split = null,
	fit_value = null,
	rack = null,
	available = null,
	experiment = {}		
;

var prod = (['shop.nordstrom.com', 'secure.nordstrom.com', 'm.shop.nordstrom.com', 'm.secure.nordstrom.com', 'about.nordstrom.com'].indexOf(window.location.hostname) > -1 ? 1 : 0)
	, mobile = (/^m/.test(window.location.hostname) ? 1 : 0)
	, env_vars = {
		collector: (prod ? 'p.nordstromdata.com' : 't.nordstromdata.com')
		, appId: (mobile ? 'nord.mow' : 'nord.com')
	}
;

var get_errors = function(e) {
    console.warn(e);
    snowplow('trackUnstructEvent', {
        schema: 'iglu:com.nordstrom/errors/jsonschema/1-0-0',
        data: {
            error: e.toString() + ': ' + navigator.userAgent,
            tag_id: tag_id,
            page_url: document.location.href
        }
    });
};

function parse_mkt_params() {
	var cleanurl = decodeURIComponent(window.location.search.replace('?', '') + window.location.hash).replace(/[?,#]/g, '&');

    var params = {},
        split_query = cleanurl.split('&');

    try {
        for (var query in split_query) {
            var key = split_query[query].split('=')[0].toLowerCase(),
            	val = split_query[query].split('=')[1];

            if (cleanurl.indexOf('cm_mmc') > -1 && key === 'cm_mmc') {
                var mmc_split = val.split('-_-');
                params.mkt_source = mmc_split[0];
                params.mkt_medium = mmc_split[1] || null;
                params.mkt_campaign = mmc_split[2] || null;
                params.mkt_term = mmc_split[3] || null;
            }
            else if ((key === 'cm_ven' || key === 'cm_cat' || key === 'cm_pla' || key === 'cm_ite') && cleanurl.indexOf('cm_mmc') == -1) {
                if (key === 'cm_ven') {
                    params.mkt_source = val;
                } if (key === 'cm_cat') {
                    params.mkt_medium = val;
                } if (key === 'cm_pla') {
                    params.mkt_campaign = val;
                } if (key === 'cm_ite') {
                    params.mkt_term = val;
                }
            }
            if (key === 'cm_re') {
                var sp_split = val.split('-_-');
                params.real_estate_version = sp_split[0],
                params.real_estate_page_area = sp_split[1] || null,
                params.real_estate_link = sp_split[2] || null;
            }
            if (key === 'cm_sp') {
                var sp_split = val.split('-_-');
                params.promotion_type = sp_split[0],
                params.promotion = sp_split[1] || null,
                params.promotion_link = sp_split[2] || null;
            }
            if (key === 'cm_em') {
                params.mkt_cm_em = val;
            } if (key === 'campaign') {
                params.mkt_cm_camp_name = val;
            } if (key === 'mcamp') {
                params.mkt_cm_camp_uid = val;
            } if (key === 'rkg_id') {
                params.mkt_rkg_id = val;
            } if (key === 'siteid') {
                params.mkt_linkshare_siteid = val;
            }
        }
    } catch(e) { 
    	get_errors(e);
    	return false; 
    }
    if (Object.getOwnPropertyNames(params).length) return params;
    else return false;
}

function getPage() {
    if (ato_MCP) {
    	sp_uid = (digitalData.shopper && digitalData.shopper.shopperId ? digitalData.shopper.shopperId : '');
        page_category = (digitalData && digitalData.page && digitalData.page.category && digitalData.page.category.category ? digitalData.page.category.category : '');
        page_category2 = (page_category ? page_category.split('~')[page_category.split('~').length-1] : '');
        page_id = (function() {
        	if (window.digitalData.page && digitalData.page.category && digitalData.page.category.pageType && digitalData.page.category.pageType === 'mcp-BoutiqueCustom') return 'BRAND BOUTIQUE SPLASH: Brands > ' + window.location.pathname.replace('\/c\/', '').replace(/-/g, ' ') + ' > \(' + page_category2 + '\)';
        	else return document.title.replace(' | Nordstrom', '');
        })();
        authenticated_state = (digitalData && digitalData.shopper && digitalData.shopper.authenticatedState ? 'authenticated' : 'anonymous');
        page_template = 'MCP';
		is_recognized = (authenticated_state !== 'anonymous' ? 'Y' : 'N');

        // if (window.location.pathname === '/c/kate-spade-new-york') {    // until https://jira.nordstrom.net/browse/MCP-229 is complete
        //     page_type = 'BRAND BOUTIQUE SPLASH';
        //     page_id = page_type + ': Brands > ' + window.location.pathname.replace('\/c\/', '').replace(/-/g, ' ') + ' > \(' + page_category2 + '\)';
        // }
    }
	else if(ato_MMP){  // product_id, product_name, on_sale, brand_name, fit_value, rack, available
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
	}
	else if(ato_WCM){
		sp_uid = (nord.config.settings.shopper && nord.config.settings.shopper.id ? nord.config.settings.shopper.id : '');
		page_id = (nord.config.settings.analytics && nord.config.settings.analytics.pageId ? nord.config.settings.analytics.pageId : document.title.replace(' | Nordstrom', ''));
		page_category = (nord.config.settings.analytics && nord.config.settings.analytics.categoryPath ? nord.config.settings.analytics.categoryPath : null);
		page_template = 'WCM';
		is_recognized = (nord.config.settings.shopper && nord.config.settings.shopper.firstName && nord.config.settings.shopper.firstName !== '' ? 'Y' : 'N');
	}
	else if(ato_legacy){
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
		if (document.location.pathname === '/os') {
			page_id = 'Fast and Easy';
			page_category = 'Fast and Easy';
			page_template = 'Fast and Easy';
		}
		page_id = document.title.replace(' | Nordstrom', '');
		search_term = search_term || bt_parameter('keyword');
	}
    loadSP();
}

function loadSP() {
	// sp.js
	(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
	p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments);
	};p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
	n.src=w;g.parentNode.insertBefore(n,g);}}(window,document,"script","https://images.nordstromdata.com/js/sp/2.6.1/sp.js","snowplow"));

	snowplow("newTracker", 'nord' + (prod ? '_prod' : '_dev'), env_vars.collector, 
		{
			appId: env_vars.appId,
			cookieDomain: ".nordstrom.com",
			cookieName: "_sp_",
			pageUnloadTimer: 0,
			useCookies: true,
			bufferSize: 5,
			encodeBase64: false,
			forceSecureTracker: true
		}
	);

	if ('snowplow' in window) {
		if (sp_uid) snowplow('setUserId', sp_uid);
		snowplow('enableLinkClickTracking', null, null, false);
		page = {
			schema: 'iglu:com.nordstrom/page_view_attrs/jsonschema/1-0-0',
			data: {
				page_url: page_url
				, page_category: (search_term ? '1.6' : page_category)
				, page_template: page_template
				, style_number: style_number
				, is_recognized: is_recognized
				, search_term: search_term
				, search_results_count: search_results_count
				, tag_id: tag_id
				, experiment : experiment
			}
		};
		contexts.push(page);
		if (window.digitalData && digitalData.product && digitalData.product.productInfo) {
			product = {
				schema: 'iglu:com.nordstrom/product_view_attrs/jsonschema/1-0-0',
				data: {
					page_url: page_url
					, product_id: product_id
					, product_category: page_category
					, style_number: style_number
					, product_name: product_name
					, on_sale: on_sale
					, brand_name: brand_name
					, fit_value: fit_value
					, rack: rack
					, available: available
					, percentage_off: percentage_off
					, price_match: price_match
					, preorder: preorder
					, tag_id: tag_id
				}
			};
			contexts.push(product);
		}
		if (mkt_params) {
			if (mkt_params.mkt_source || mkt_params.mkt_medium || mkt_params.mkt_campaign || mkt_params.mkt_term || mkt_params.mkt_cm_content || mkt_params.mkt_cm_camp_name || mkt_params.mkt_cm_camp_uid || mkt_params.mkt_rkg_id || mkt_params.mkt_linkshare_siteid || mkt_params.mkt_cm_em) {
				mkt = {
					schema: 'iglu:com.nordstrom/marketing_attrs/jsonschema/1-0-0',
					data: {
		                mkt_source: mkt_params.mkt_source || null,
		                mkt_medium: mkt_params.mkt_medium || null,
		                mkt_campaign: mkt_params.mkt_campaign || null,
		                mkt_term: mkt_params.mkt_term || null,
				        mkt_content: mkt_params.mkt_cm_content || null,
				        mkt_cm_camp_name: mkt_params.mkt_cm_camp_name || null,
				        mkt_cm_camp_uid: mkt_params.mkt_cm_camp_uid || null,
				        mkt_rkg_id: mkt_params.mkt_rkg_id || null,
				        mkt_linkshare_siteid: mkt_params.mkt_linkshare_siteid || null,
				        mkt_cm_em: mkt_params.mkt_cm_em || null
					}
				};
				contexts.push(mkt);
			}
			if(mkt_params.promotion_type) {
				promos = {
					schema: 'iglu:com.nordstrom/site_promos/jsonschema/1-0-0',
					data: {
						promotion_type: mkt_params.promotion_type || null,
	        			promotion: mkt_params.promotion || null,
	        			link: mkt_params.promotion_link || null
					}
				};
				contexts.push(promos);
			}
			if(mkt_params.real_estate_version) {
				real_estate = {
					schema: 'iglu:com.nordstrom/real_estate/jsonschema/1-0-0',
					data: {
						version: mkt_params.real_estate_version || null,
	        			page_area: mkt_params.real_estate_page_area || null,
	        			link: mkt_params.real_estate_link || null
					}
				};
				contexts.push(real_estate);
			}
		}
		snowplow('trackPageView', page_id, contexts);
		
		window.spPV = true;
		if (typeof CustomEvent === 'object') {
			event = document.createEvent('Event');
			event.initEvent('spPV', false, false);
			document.dispatchEvent(event);
		}
		else {
			event = new Event('spPV');
			document.dispatchEvent(event);
		}
	}
}

function MMPloaded() {
	mustExecute(function() {
		if (typeof window.digitalData === "undefined") throw 'no digitalData';
		else {
			if (window.digitalData && digitalData.page && digitalData.page.category && digitalData.page.category.pageType && digitalData.page.category.pageType.indexOf('mcp') === -1) {
				ato_MMP = true;
				getPage();
				return true;
			}
			else throw 'no MMP';
		}
	}, 10)();
}

function mustExecute(func, numTrys) {
  return function () {
    try {
      func();
    } catch (e) {
      if (numTrys === 0) {
        // startSP();
        loadSP();
      }
      setTimeout(mustExecute(func, numTrys - 1), 250);
    }
  };
}
// mustExecute(function(){}, 10)();

var ato_MCP = (window.digitalData && digitalData.page && digitalData.page.pageInfo && digitalData.page.pageInfo.applicationName === 'mcp'),
    ato_WCM = ('nord' in window && 'config' in nord && 'settings' in nord.config && typeof nord.config.settings !== 'undefined' && nord.config.settings !== undefined),
    ato_legacy = 'PageParameters' in window,
    ato_MMP;

if (ato_MCP || ato_WCM || ato_legacy) getPage();
else MMPloaded();