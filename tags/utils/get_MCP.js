export default function get_MCP() {
	var sp_uid, page_id, page_category, page_category2, page_template, authenticated_state, is_recognized;
	if (window.digitalData && digitalData.page && digitalData.shopper) {
		return (function() {
			sp_uid = (digitalData.shopper && digitalData.shopper.shopperId ? digitalData.shopper.shopperId : '');
			page_category = (digitalData && digitalData.page && digitalData.page.category && digitalData.page.category.category ? digitalData.page.category.category : '');
			page_category2 = (page_category ? page_category.split('~')[page_category.split('~').length-1] : '');
			page_id = (function(page_category2) {
				if (window.digitalData.page && digitalData.page.category && digitalData.page.category.pageType && digitalData.page.category.pageType === 'mcp-BoutiqueCustom') return 'BRAND BOUTIQUE SPLASH: Brands > ' + window.location.pathname.replace('\/c\/', '').replace(/-/g, ' ') + ' > \(' + page_category2 + '\)';
				else return document.title.replace(' | Nordstrom', '');
			})(page_category2);
		    authenticated_state = (digitalData && digitalData.shopper && digitalData.shopper.authenticatedState && digitalData.shopper.authenticatedState.toLowerCase() === 'authenticated' ? 'Y' : 'N');
			page_template = 'MCP';
			is_recognized = (authenticated_state !== 'anonymous' ? 'Y' : 'N');

			// if (window.location.pathname === '/c/kate-spade-new-york') {    // until https://jira.nordstrom.net/browse/MCP-229 is complete
			//     page_type = 'BRAND BOUTIQUE SPLASH';
			//     page_id = page_type + ': Brands > ' + window.location.pathname.replace('\/c\/', '').replace(/-/g, ' ') + ' > \(' + page_category2 + '\)';
			// }
		})();
	}
	else return false;
}