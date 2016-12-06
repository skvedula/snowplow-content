export default function Results_pagination(id, keyword, count, attrs) {console.log('paginate');
    cmCreatePageviewTag(id, '1.7', keyword, count, null, attrs);
	snowplow('trackPageView', id, [{
		schema: 'iglu:com.nordstrom/page_view_attrs/jsonschema/1-0-0',
		data: {
			page_url: window.location.href,
			page_category: '1.7',
			page_template: (window.PageParameters ? 'legacy' : null),
			search_term: keyword,
			search_results_count: count
		}
	}]);
}