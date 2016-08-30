if (window.digitalData && window.digitalData.page && window.digitalData.page.category && window.digitalData.page.category.pageType && window.digitalData.page.category.pageType === 'product') {
    window.nord.core.dispatcher.register(function(payload) {
        //listen to ShoppingBagAdd, which is onclick of Add to Bag button
        if (payload.action === window.nord.core.actions.ShoppingBagAdd) {
            try {
                var sku_id, j = payload.data[0],
                    quantity = parseFloat(j.NewQuantity),
                    price = digitalData.product.productInfo.salePrice || digitalData.product.productInfo.basePrice;
                    price = price.split('$')[1];
                sku_id = ('SkuId' in j) ? j.SkuId : '';
                sku_id = sku_id.toString();
                snowplow('trackStructEvent', digitalData.page.category.pageType, 'ShoppingBagAdd', sku_id, quantity, price);
                //using trackStructEvent, no need for custom schema
                //console.log("snowplow(trackStructEvent" + digitalData.page.category.pageType + " " + "'ShoppingBagAdd',sku_id " + sku_id + " quantity " + quantity + " price " + price); //for debugging
            } catch (e) {
                console.log(e);
            }
        }
    });
}
