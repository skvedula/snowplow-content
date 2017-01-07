export default function Cart_beautyBoardAddToBag(data, tag_id) {
	try {
		for (var i=0;i<data.length;i++) {
			var item = data[i], product_price, product_name;
			var style = item.StyleNumber;

			[].forEach.call(document.querySelectorAll('.board-item'), function(el) {
				if (el.querySelectorAll('div.product-price span').length && el.id.substring(0, el.id.indexOf('-')) === item.StyleNumber) {

					[].forEach.call(el.querySelectorAll('div.product-price span'), function(el2) {
						if (el2.textContent) product_price = parseFloat(el2.textContent.replace(/[$,]/g, ''));
					});
					var product_name = el.querySelector('a.product-href').textContent;

					cmCreateShopAction5Tag(style, product_name, '1', product_price, (item.SiteLocationId ? item.SiteLocationId : 'BEAUTY BOARD'));

					snowplow(
			            'trackAddToCart',
			            item.SkuId, //SKU
			            product_name, //Name
			            (item.SiteLocationId ? item.SiteLocationId : 'BEAUTY BOARD'), //Category
			            product_price, //Unit price
			            '1', //Quantity
			            null, //Currency
			            [{
			                schema: 'iglu:com.nordstrom/add_item_attrs/jsonschema/1-0-0',
			                data: {
			                    document_url: window.location.href,
			                    style_number: style,
			                    tag_id: tag_id
			                }
			            }]
			        );

			        cmDisplayShops();
				}
			});
		}
	}
	catch(e) { console.log(e); }
}