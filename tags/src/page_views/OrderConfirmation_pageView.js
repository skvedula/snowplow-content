export default function OrderConfirmation_pageView(tag_id) {
	snowplow('trackPageView', "/CHECKOUT/ORDER RECEIPT", [{
		page_url: window.location.href,
		page_category: '/checkout/',
		page_template: 'Legacy',
		tag_id: tag_id
	}]);
}