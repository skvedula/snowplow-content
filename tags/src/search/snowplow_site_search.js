(function sp_search_results() {
	if (window.snowplow) {
		var tag_id = '3482023'
			, keyword = bt_parameter('keyword')
			, total_results = (window.digitalData && digitalData.page && digitalData.page.pageInfo.onsiteSearchResults || null)
			// , page_results = (document.querySelectorAll('.nui-product-module').length || null)
			, page_url = document.location.href
		;
		var get_errors = function(e) {
			snowplow('trackUnstructEvent', {
				schema: 'iglu:com.nordstrom/errors/jsonschema/0-0-1',
				data: {
					error: e
					, tag_id: tag_id
					, page_url: page_url
				}
			});
		};
		var get_search = (function() {
			try {
				snowplow('trackSiteSearch', keyword, null, total_results);
			}
			catch(e){ get_errors(e); }
		})();
		var get_filter = (function() {
			try {
				var filter_name = null;
				[].forEach.call(document.querySelectorAll('.filter-menu-toggle'), function(el) {
					el.addEventListener('click', function() { filter_name = this.innerHTML; });
				});
				[].forEach.call(document.querySelectorAll('.filter-list input[type=checkbox], .filter-list a.option-name'), function(el) {
					el.addEventListener('click', function(e) {
						snowplow('trackUnstructEvent', {
							schema: 'iglu:com.nordstrom/search_results_actions/jsonschema/0-0-2',
							data: {
								action: 'filter_results'
								, category: filter_name	// 'Brand'
								, value: this.parentNode.children[1].innerHTML		// 'London Fog'
								, keyword: keyword
								, tag_id: tag_id
								, page_url: page_url
							}
						});
					});
				});
			}
			catch(e){ get_errors(e); }
		})();
	}
})();