(function sp_remove_item() {
    var tag_id = '3349598',
		document_url = window.location.href,
		style_number = null,
		product_name = null,
		quantity = null,
		price = null,
		category_id = null,
		sku_id = null,
		style_id = null,
		size = null,
		width = null,
		color = null,
		percentage_off = null,
		sale_type = null,
		authenticated_state = null,
		bopus = null,
		store_number = null,
		mmp = null,
		experiment = {};
		
	var fire_remove_item = function() {
		snowplow(
			'trackRemoveFromCart',
			sku_id,             //SKU
			product_name,       //Name
			category_id,        //Category
			price,              //Unit price
			quantity,           //Quantity
			null,               //Currency
			[
				{
					schema: 'iglu:com.nordstrom/remove_item_attrs/jsonschema/0-0-5',
					data: {
						document_url: document_url,
						style_number: style_number,
						style_id: style_id,
						size: size,
						width: width,
						color: color,
						percentage_off: percentage_off,
						sale_type: sale_type,
						authenticated_state: authenticated_state,
						bopus: bopus,
						store_number: store_number,
						mmp: mmp,
						experiment : experiment,
						tag_id : tag_id
					}
				},
				{
					schema: 'iglu:com.nordstrom/uids/jsonschema/1-0-0',
					data: {
						'coremetrics_id': (window._$cV1 ? window._$cV1.substring(0, 23) : null),
						'adobe_id': bt_cookie('aam_uuid') || null,
						'elwin_id': bt_cookie('experiments').split('=')[1] || null,
						'maxymiser_id': null,
						'authenticated': authenticated_state
					}
				}
			]
		);
	};

	var get_errors = function(e) {
    	console.log(e);
		snowplow('trackUnstructEvent', {
			schema: 'iglu:com.nordstrom/errors/jsonschema/0-0-1',
			data: {
    			error: e.toString() + ': ' + navigator.userAgent
				, tag_id: tag_id
				, page_url: document.location.href
			}
		});
	};
	
	if (window.nord && nord.core && nord.core.dispatcher) {
		window.nord.core.dispatcher.register(function(payload, runAsTask) {
            if (runAsTask) return false;
			if (payload.action === window.nord.core.actions.ShoppingBagRemove) {
				try {
					var j = payload.data[0];
					// var k = (digitalData && digitalData.product && digitalData.product.productInfo ? digitalData.product.productInfo : null);

					if (j) {
						category_id = ('SiteLocationId' in j && j.SiteLocationId !== '' ? j.SiteLocationId.split("*")[0] : '');
    					style_id = j.StyleId || null;
						sku_id = ('SkuId' in j) ? (j.SkuId).toString() : '';
						product_name = j.StyleName || null;
						quantity = parseInt(j.Quantity, 10);
						price = parseFloat(j.UnitPrice);
						size = (j.Size && j.Size.Message ? j.Size.Message : null);
						// width = (j.Size && j.Size.Message ? j.Size.Message.split(' ')[1] : null);
						color = (j.Color && j.Color.Message ? j.Color.Message.toLowerCase() : null);
						sale_type = (function() {
							if (j.SiteLocationId && j.SiteLocationId.split('*')[8]) {
								if (j.SiteLocationId.split('*')[8] === 'Sale Y') return 'Y';
								else return 'N';
							}
						})();
						bopus = (j.StoreNumber ? 'Y' : 'N');
						store_number = (j.StoreNumber ? (j.StoreNumber).toString() : null);
					}
					// if (k && k.productID && k.productID !== null && k.styleNumber !== "") {		// can't use digitalData.product as item on PDP may not match item being removed from minibag
						// percentage_off = (k.percentageOff ? parseInt(k.percentageOff.replace('%', ''), 10) : 0);
						// style_number = (k.styleNumber ? (k.styleNumber).toString() : null);
					// }
					authenticated_state = (function() {
						if (window.digitalData && digitalData.shopper && digitalData.shopper.authenticatedState) return digitalData.shopper.authenticatedState;
						else if (window.nord && nord.config && nord.config.settings && nord.config.settings.shopper && nord.config.settings.shopper.isLoggedIn) return 'Registered';
					})();
					mmp = (function() {
						if (window.digitalData && digitalData.page && digitalData.page.category && digitalData.page.category.pageType) return 'Y';
						else return 'N';
					})();
					experiment = (function() {
						if (window.digitalData && digitalData.elwin) {
							return {
								experimentId : digitalData.elwin.elwinId,
								experimentData : digitalData.elwin.elwinData 
							};
						}
					})();

					if (price) {
						if (window.spPV) fire_remove_item();
						else document.addEventListener('spPV', fire_remove_item, false);
					}
					else get_errors('price null');
				} catch (e) {
					get_errors(e);
				}
			}
		});
	}
	else {
		try {
			$(document).on('click', '#mini-bag-section li.mini-bag-item input.item-remove', function() {
				// console.log($(this).parents('li.mini-bag-item').data('item-params'));

				var j = $(this).parents('li.mini-bag-item').data('item-params') || $(this).parents('li.mini-bag-item').data('minibag-params');
				// var k = (nord.config.settings.product || null);

				if (j) {
					var SiteLocationId = (j.SiteLocationId ? j.SiteLocationId.split("*") : null);
					category_id = (SiteLocationId ? SiteLocationId[0] : '');
					style_id = ('StyleId' in j) ? (j.StyleId).toString() : '';
					sku_id = (SiteLocationId ? SiteLocationId[31] : '');
					product_name = j.StyleName;
					quantity = parseInt(j.Quantity, 10);
					bopus = (j.StoreNumber ? "Y" : "N");
					store_number = (j.StoreNumber ? (j.StoreNumber).toString() : null);
					price = parseFloat(j.UnitPrice);
					size = j.Size || null;
					color = j.Color || null;
				}
				// if (k && k.styleId && k.styleNumber) {		// can't use nord.config.settings.product as item on PDP may not match item being removed from minibag
				// 	style_number = (k.styleNumber).toString();
				// 	percentage_off = (k.percentOff ? parseInt(k.percentOff.replace('%', ''), 10) : null);
				// }


				if (window.digitalData && digitalData.shopper && digitalData.shopper.authenticatedState) authenticated_state = digitalData.shopper.authenticatedState;
				else if (window.nord && nord.config && nord.config.settings && nord.config.settings.shopper && nord.config.settings.shopper.isLoggedIn) authenticated_state = 'Registered';

				mmp = 'N';

				if (price) {
					if (window.spPV) fire_remove_item();
					else document.addEventListener('spPV', fire_remove_item, false);
				}
				else get_errors('price null');
			});
		} catch (e) {
			get_errors(e);
		}
	}
})();