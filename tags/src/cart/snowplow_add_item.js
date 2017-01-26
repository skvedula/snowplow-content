(function sp_add_item() {
    var tag_id = '3328815',
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

    var fire_add_item = function() {
        snowplow(
            'trackAddToCart',
            sku_id, //SKU
            product_name, //Name
            category_id, //Category
            price, //Unit price
            quantity, //Quantity
            null, //Currency
            [{
                schema: 'iglu:com.nordstrom/add_item_attrs/jsonschema/0-0-5',
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
                    experiment: experiment,
                    tag_id: tag_id
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
                error: e.toString() + ': ' + navigator.userAgent,
                tag_id: tag_id,
                page_url: document.location.href
            }
        });
    };

    if (window.nord && nord.core && nord.core.dispatcher) {
        window.nord.core.dispatcher.register(function(payload, runAsTask) {
            if (runAsTask) return false;
            if (payload.action === window.nord.core.actions.ShoppingBagAdded) {
                try {
                    var j = payload.data[0],
                        k = digitalData.product.productInfo;

                    if (j) {
                        category_id = ('SiteLocationId' in j && j.SiteLocationId !== '' ? j.SiteLocationId.split("*")[0] : '');
                        style_id = j.StyleId || null;
                        sku_id = ('SkuId' in j) ? (j.SkuId).toString() : '';
                        quantity = parseInt(j.NewQuantity, 10);
                        bopus = (j.storeNumber ? "Y" : "N");
                        store_number = (j.storeNumber ? (j.storeNumber).toString() : null);
                    }
                    if (k && k.productID && k.productID !== null && k.styleNumber !== "") {
                        if ('SKU' in k && 'Price' in k.SKU && k.SKU.Price) {
                            price = parseFloat(k.SKU.Price.replace("$", ""));
                        } else if (digitalData.product.productInfo.salePrice) {
                            price = parseFloat(digitalData.product.productInfo.salePrice.replace("$", ""));
                        } else {
                            price = parseFloat(digitalData.product.productInfo.basePrice.replace("$", ""));
                        }
                        style_number = (function() {
                            try {
                                var styleNumberLabel = document.querySelector('ul.price-filters div.form-radio.selected');
                                return styleNumberLabel === null ? (k.styleNumber).toString() : styleNumberLabel.parentNode.nextElementSibling.querySelector('span.style-number').textContent.replace('Item #', '');
                            } catch (e) {
                                bt_log(e);
                                bt_log('styleNumber ' + k.styleNumber ? (k.styleNumber).toString() : null);
                            }
                        })();
                        product_name = k.productName;
                        size = ('SKU' in k && 'Size' in k.SKU) ? k.SKU.Size : '';
                        width = ('SKU' in k && 'Width' in k.SKU) ? k.SKU.Width : '';
                        color = ('SKU' in k && 'Color' in k.SKU) ? k.SKU.Color : '';
                        percentage_off = (k.percentageOff ? parseInt(k.percentageOff.replace('%', ''), 10) : 0);
                        sale_type = (function() {
                            if (j.SiteLocationId && j.SiteLocationId.split('*')) {
                                if (j.SiteLocationId.split('*')[8] === 'Sale Y') return 'Y';
                                else return 'N';
                            }
                        })();
                    }
                    authenticated_state = (digitalData && digitalData.shopper && digitalData.shopper.authenticatedState ? digitalData.shopper.authenticatedState : null);
                    mmp = 'Y';
                    experiment = {
                        experimentId: digitalData.elwin.elwinId,
                        experimentData: digitalData.elwin.elwinData
                    };

                    if (price) {
                        if (window.spPV) fire_add_item();
                        else document.addEventListener('spPV', fire_add_item, false);
                    } else get_errors('price null');
                } catch (e) {
                    get_errors(e);
                }
            }
        });
    } else if (nord && nord.config && nord.config.settings && nord.config.settings.analytics) {
        $(document).on('update.miniBag', function(event, data) {
            try {
                var j = data.Items[0],
                    k = (nord.config.settings.product || null);

                if (j) {
                    category_id = ('SiteLocationId' in j && j.SiteLocationId !== '' ? j.SiteLocationId.split("*")[0] : '');
                    style_id = j.StyleId || null;
                    sku_id = ('SkuId' in j) ? (j.SkuId).toString() : '';
                    product_name = j.StyleName;
                    quantity = parseInt($('#customizations #quantity input.quantity-box').val(), 10);
                    bopus = (j.StoreNumber ? "Y" : "N");
                    store_number = (j.StoreNumber ? (j.StoreNumber).toString() : null);
                    price = parseFloat(j.UnitPrice);
                    size = j.Size;
                    color = j.Color;
                }
                if (k && k.styleId && k.styleNumber) {
                    style_number = (k.styleNumber).toString();
                    percentage_off = (k.percentOff ? parseInt(k.percentOff.replace('%', ''), 10) : null);
                }
                authenticated_state = (nord.config.settings.shopper && nord.config.settings.shopper.isLoggedIn ? 'Registered' : 'Anonymous');
                mmp = 'N';

                if (price) {
                    if (window.spPV) fire_add_item();
                    else document.addEventListener('spPV', fire_add_item, false);
                } else get_errors('price null');
            } catch (e) {
                get_errors(e);
            }
        });
    }
})();
