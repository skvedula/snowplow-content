export default function Content_Category() {
	// MMP Content & Category Pages, will replace https://hub.signal.co/sites/KxHRmBh/tags/1667661/attributes
	var tag_id = '1667661',
	        page_template,
	        page_id,
	        page_category = null,
            page_category2,
	        page_type,
	        keyword = bt_parameter('keyword'),
	        search_results_count = null,
	        analytics,
	        elwin,
	        authenticated_state = null,
	        modern_page = null,
	        isStoreMode = "All Items",
	        attrArray = []
	;

    var digitalData = window.digitalData;

    var ato_MCP = (window.digitalData && digitalData.page && digitalData.page.pageInfo && digitalData.page.pageInfo.applicationName === 'mcp'),
        ato_MMP = ('digitalData' in window && 'page' in window.digitalData && 'shopper' in window.digitalData && 'category' in window.digitalData.page),
        ato_WCM = ('nord' in window && 'config' in nord && 'settings' in nord.config && typeof nord.config.settings !== 'undefined' && nord.config.settings !== undefined),
        ato_legacy = 'PageParameters' in window;

    if (ato_MCP) {
        page_category = (digitalData && digitalData.page && digitalData.page.category && digitalData.page.category.category ? digitalData.page.category.category : '');
        page_category2 = (page_category ? page_category.split('~')[page_category.split('~').length-1] : '');
        authenticated_state = (digitalData && digitalData.shopper && digitalData.shopper.authenticatedState ? 'authenticated' : 'anonymous');
        if (window.location.pathname === '/c/kate-spade-new-york') {    // until https://jira.nordstrom.net/browse/MCP-229 is complete
            page_type = 'BRAND BOUTIQUE SPLASH';
            page_id = page_type + ': Brands > ' + window.location.pathname.replace('\/c\/', '').replace(/-/g, ' ') + ' > \(' + page_category2 + '\)';
        }
        attrArray[21] = authenticated_state;
    }
    else if (ato_MMP) {  // /c/kate-spade-new-york only for initial launch
        page_category = (digitalData && digitalData.page && digitalData.page.category && digitalData.page.category.category ? digitalData.page.category.category : '');
        page_category2 = (page_category ? page_category.split('~')[page_category.split('~').length-1] : '');
        authenticated_state = (digitalData && digitalData.shopper && digitalData.shopper.authenticatedState ? 'authenticated' : 'anonymous');
        if (window.digitalData.page.category.pageType.toLowerCase() === 'browse') page_id = window.location.pathname;
        else if (window.digitalData.page.category.pageType.toLowerCase() === 'search') page_id = 'RESULTS: ' + document.querySelector('h1').textContent.trim().replace(/[^a-zA-Z\s\d]/g, '') + ' > P.1 - DF- (' + categorys[categorys.length-1] + ')';

        keyword = (digitalData.page.pageInfo.onsiteSearchTerm && digitalData.page.pageInfo.onsiteSearchTerm !== '' ? digitalData.page.pageInfo.onsiteSearchTerm.replace(/-/g, ' ') : bt_parameter('keyword'));
        search_results_count = (digitalData && digitalData.page && digitalData.page.pageInfo && digitalData.page.pageInfo.onsiteSearchResults ? digitalData.page.pageInfo.onsiteSearchResults : null);
        elwin = (digitalData.elwin && digitalData.elwin.Experiments ? JSON.stringify(digitalData.elwin.Experiments) : null);
        if((document.cookie).split("storemode=id=").length > 1) isStoreMode = (document.cookie).split("storemode=id=")[1].split('&')[0];
        var guidIndex = document.cookie.indexOf('ExperimentId=') || null;

        attrArray[21] = authenticated_state;
        attrArray[28] = isStoreMode;
        attrArray[30] = (guidIndex ? document.cookie.slice(guidIndex+13, guidIndex+49) : '');
        attrArray[31] = elwin || null;
        attrArray[35] = window.digitalData.page.category.pageType.toLowerCase();
        attrArray[41] = tag_id;
    }
    else if (ato_WCM) {      // non-Kate Spade boutique and editorial pages (home page, DLPs, LPs)
        if ('analytics' in nord.config.settings) {
            analytics = nord.config.settings.analytics;
            if ('pageTemplate' in analytics) page_template = analytics.pageTemplate; // Page Template
            if ('pageId' in analytics) page_id = (analytics.pageId !== '' ? analytics.pageId.replace(/\'/g, "") : window.location.pathname); // Page ID
            //if (/mstage1.shop/.test(window.location.hostname) || /mstage1.secure/.test(window.location.hostname) || /m.shop/.test(window.location.hostname) || /m.secure/.test(window.location.hostname)) page_id += ' - MOW'; // Page ID
            if ('categoryPath' in analytics) page_category = analytics.categoryPath; // Category String
            authenticated_state = (document.getElementById('shopper-status') && document.getElementById('shopper-status').getElementsByTagName('a')[0].text !== 'Sign In' ? 'authenticated' : 'anonymous');
            modern_page = 'N';
            attrArray[21] = authenticated_state;
        }
    } 
	else if (ato_legacy) {
		page_template = PageParameters.templateName;    // Page Template
		page_id = (function() { 
			if ('pageId' in PageParameters && PageParameters.pageId != null) return PageParameters.pageId.replace(/\'/g, ""); 
			else if ('ioCoremetricsPageId' in PageParameters && PageParameters.ioCoremetricsPageId != null) return PageParameters.ioCoremetricsPageId.replace(/\'/g, ""); 
			else return window.location.pathname; 
		})();    // Page ID
		//if (/mstage1.shop/.test(window.location.hostname) || /mstage1.secure/.test(window.location.hostname) || /m.shop/.test(window.location.hostname) || /m.secure/.test(window.location.hostname)) digitalData.page.pageInfo.pageID += ' - MOW';    // Page ID
		page_category = (function() { if ('ioCoremetricsCatId' in PageParameters && PageParameters.ioCoremetricsCatId != undefined && PageParameters.ioCoremetricsCatId != null) { return window.PageParameters.ioCoremetricsCatId } else if ('categoryString' in PageParameters && PageParameters.categoryString != undefined && PageParameters.categoryString != null) { return window.PageParameters.categoryString } else {return null} })();    // Category String
	}
    else return false;

    if(window.location.hostname === 'm.shop.nordstrom.com'){
        page_id += ' - MOW'; 
    }

    cmCreatePageviewTag(page_id, page_category, keyword, search_results_count, attrArray.join('-_-'));
}