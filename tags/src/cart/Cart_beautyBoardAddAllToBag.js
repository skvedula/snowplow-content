export default function Cart_beautyBoardAddAllToBag() {
	$(document).on('update.miniBag.tto2', function(event, json) {
        if ('Items' in json && json.Items.length > 0) {//console.log(json.Items);
            $.each(json.Items, function(index, value) {                
                var pr = $('.product-item[data-style-id=' + value.StyleId + ']').attr('data-style-number');
                cmAddShop(["pr",pr,"pm",value.StyleName,"qt",1,"bp",value.UnitPrice,"cg",(typeof value.SiteLocationId != 'undefined' && value.SiteLocationId != '' ? value.SiteLocationId : 'BEAUTY BOARD'),"ha1",null,"at","5","tid","4","pc","N","sx1",null,"cmAttributes",null]);

	            snowplow(
		            'trackAddToCart',
		            pr, //SKU
		            value.StyleName, //Name
		            (typeof value.SiteLocationId != 'undefined' && value.SiteLocationId != '' ? value.SiteLocationId : 'BEAUTY BOARD'), //Category
		            value.UnitPrice, //Unit price
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
            });
            cmDisplayShops();
        }
    });
}