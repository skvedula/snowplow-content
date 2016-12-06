export default function MyAccount_leftNav(linkText) {
	cmCreatePageviewTag(linkText, "/youraccount/");
	snowplow('trackPageView', linkText, [{
		schema: 'iglu:com.nordstrom/page_view_attrs/jsonschema/1-0-0',
		data: {
			page_url: window.location.href,
			page_category: 'youraccount',
			page_template: (window.PageParameters ? 'legacy' : null),
			is_recognized: 'Y'
		}
	}]);
}