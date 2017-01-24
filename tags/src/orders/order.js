export default function order(tag_id) {
	if (window.snowplow && window.PageParameters && PageParameters.orderInfo) {

		var oi = PageParameters.orderInfo, oii, i=0, siteLocationId = '';

		// order tag
		snowplow(
			'addTrans',
			oi.orderId,													// orderID
			null,														// affiliation or store name
			parseFloat(oi.merchandiseTotal.replace(/[,$]/g, '')),		// order subtotal
			parseFloat(oi.taxAmount.replace(/[,$]/g, '')),				// tax
			parseFloat(oi.shippingTotal.replace(/[,$]/g, '')),			// shipping total
			null,														// city
			null,														// state/province
			null,														// country
			null														// currency
		);

		if (oi.items && oi.items.length > 0) {
			oii = oi.items;
			for (;i<oii.length;i++) {
				if (oii[i].orderItemsPrice !== '$0.00') {
					siteLocationId = oii[i].siteLocationId.split('*');
					// order item tags
					snowplow(
						'addItem',
						oi.orderId,														// orderID
						oii[i].SKU.toString(),											// SKU / product code
						oii[i].productName.replace(/·/g, '').replace(/®/g, ''),		// product name
						oii[i].productCategory,										// category
						parseFloat(oii[i].orderItemsPrice.replace(/[,$]/g, '')),	// unit price
						oii[i].orderItemsQuantity,									// quantity
						null,														// currency
						[
							{
								schema: 'iglu:com.nordstrom/order_item_attrs/jsonschema/1-1-0',
								data: {
									outfit_id: oii[i].outfitId.toString(),
									gift_services: oii[i].GiftServices,
									saved_for_later: oii[i].SavedForLater,
									store_pickup: oii[i].storeId.toString(),
									product_rating: (siteLocationId[1] != '' ? parseInt(siteLocationId[1], 10) : null),
									number_reviews: (siteLocationId[2] != '' ? parseInt(siteLocationId[2], 10) : null),
									recommendation_percent: (siteLocationId[3] != '' ? parseInt(siteLocationId[3], 10) : null),
									on_sale: (oii[i].isSaleItem ? 'Sale Y' : 'Sale N'),
									brand_name: siteLocationId[9].replace('®', '').replace(/·/g, ''),
									filter_used: siteLocationId[10],
									search_term: siteLocationId[11],
									sort_used: siteLocationId[12],
									base_copy_split: siteLocationId[13],
									true_fit: siteLocationId[14],
									same_day_delivery: siteLocationId[15],
									size: oii[i].Size || null,
									width: siteLocationId[33],
									color: oii[i].Color || null,
									is_recognized: (PageParameters.shopper && PageParameters.shopper.firstName && PageParameters.shopper.firstName !== '' ? 'Y' : 'N'),
									tag_id: tag_id,
									style_number: oii[i].styleNumber
								}
							},
							{
								schema: 'iglu:com.nordstrom/uids/jsonschema/1-0-0',
								data: {
									'coremetrics_id': (window._$cV1 ? window._$cV1.substring(0, 23) : null),
									'adobe_id': bt_cookie('aam_uuid') || null,
									'elwin_id': bt_cookie('experiments').split('=')[1] || null,
									'maxymiser_id': null,
									'authenticated': (digitalData && digitalData.shopper && digitalData.shopper.authenticatedState ? digitalData.shopper.authenticatedState : null)
								}
							}
						]
					);
				}
			}
		}
		snowplow('trackTrans');
	}
}