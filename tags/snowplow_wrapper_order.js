function loadSP() {
	var tag_id = '3464019'
		, oi			// orderInfo
		, oii			// orderInfo.items
		, order_id		// orderInfo.orderId
		, shopper_id
		, merchandise_total
		, shipping
		, tax
		, items = []
		, style_number
		, product_name
		, category
		, unit_price
		, quantity
		, outfit_id
		, gift_services
		, saved_for_later
		, store_pickup
		, product_rating
		, number_reviews
		, recommendation_percent
		, on_sale
		, brand_name
		, filter_used
		, search_term
		, sort_used
		, base_copy_split
		, true_fit
		, same_day_delivery
		, sku
		, size
		, width
		, color
		, is_recognized
		, siteLocationId
	;

	if (window.PageParameters && PageParameters.orderInfo) {
		oi = PageParameters.orderInfo;
		order_id = oi.orderId;
		shopper_id = oi.customerId;
		merchandise_total = oi.merchandiseTotal;
		shipping = oi.shippingTotal;
		tax = oi.taxAmount;
		if (oi.items && oi.items.length > 0) {
			oii = oi.items;
			items = [];
		}
	}

	if (order_id && oii) {
		for (var i in oii) {
			siteLocationId = oii[i].siteLocationId;
			items.push({
				order_id: oi.orderId,														// orderID
				siteLocationId: siteLocationId,
				style_number: oii[i].styleNumber,											// SKU / product code
				product_name: oii[i].productName,		// product name
				category: oii[i].productCategory,										// category
				unit_price: oii[i].orderItemsPrice,	// unit price
				quantity: oii[i].orderItemsQuantity,	
				outfit_id: oii[i].outfitId || null,
				gift_services: oii[i].GiftServices || null,
				saved_for_later: oii[i].SavedForLater || null,
				store_pickup: oii[i].storeId || null,
				product_rating: (siteLocationId[1] !== '' ? siteLocationId[1] : null),
				number_reviews: (siteLocationId[2] !== '' ? siteLocationId[2] : null),
				recommendation_percent: (siteLocationId[3] !== '' ? parseInt(siteLocationId[3], 10) : null),
				on_sale: (oii[i].isSaleItem ? 'Sale Y' : 'Sale N'),
				brand_name: siteLocationId[9].replace('®', '').replace(/·/g, '') || null,
				filter_used: siteLocationId[10] || null,
				search_term: siteLocationId[11] || null,
				sort_used: siteLocationId[12] || null,
				base_copy_split: siteLocationId[13] || null,
				true_fit: siteLocationId[14] || null,
				same_day_delivery: siteLocationId[15] || null,
				sku: oii[i].SKU.toString() || null,
				size: oii[i].Size || null,
				width: siteLocationId[33] || null,
				color: oii[i].Color || null,
				is_recognized: (PageParameters.shopper && PageParameters.shopper.firstName && PageParameters.shopper.firstName !== '' ? 'Y' : 'N')
			});
		}

		clickstream.fire(
			'order', 
			['cm','sp'], 
			{ 
				order_id: order_id
				, shopper_id: shopper_id
				, merchandise_total: merchandise_total
				, shipping: shipping
				, tax: tax
				, items: items
				, tag_id: tag_id
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