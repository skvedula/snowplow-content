try {
    if (window.digitalData.page.category.pageType === 'product') {
        window.nord.core.dispatcher.register(function(payload) {
            if (payload.action === window.nord.core.actions.ProductFilterSelect) {
                try {
                    snowplow('trackUnstructEvent', {
                        schema: 'iglu:com.nordstrom/actions_product/jsonschema/0-0-1',
                        data: {
                            styleNumber: digitalData.product.productInfo.styleNumber,
                            category: digitalData.product.category.parentCategory,
                            filterName: payload.filter,
                            filterValue: payload.selection,
                            shopperId: digitalData.shopper.shopperId
                        }
                    });
                } catch (e) {
                    console.log(e);
                }
            }
        });
    }
} catch (e) {
    console.log(e);
}