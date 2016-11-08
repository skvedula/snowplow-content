export default function Cart_beautyBoardAddToBag(e) {
	var pr = e.target.parentNode.querySelector('.product-item').getAttribute('data-style-number');
    $(document).on('update.miniBag.tto', function(event, json) {
        if ('Items' in json && json.Items.length > 0) {
            var item = json.Items[0];
            cmAddShop(["pr",pr,"pm",item.StyleName,"qt",1,"bp",item.UnitPrice,"cg",(typeof item.SiteLocationId != 'undefined' && item.SiteLocationId != '' ? item.SiteLocationId : 'BEAUTY BOARD'),"ha1",null,"at","5","tid","4","pc","N","sx1",null,"cmAttributes",null]);
            cmDisplayShops();

            snowplow(
	            'trackAddToCart',
	            pr, //SKU
	            item.StyleName, //Name
	            (typeof item.SiteLocationId != 'undefined' && item.SiteLocationId != '' ? item.SiteLocationId : 'BEAUTY BOARD'), //Category
	            item.UnitPrice, //Unit price
	            1, //Quantity
	            null, //Currency
	            [{
	                schema: 'iglu:com.nordstrom/add_item_attrs/jsonschema/1-0-0',
	                data: {
	                    document_url: document_url,
	                    style_number: pr,
	                    tag_id: tag_id
	                }
	            }]
	        );
        }
    });
}