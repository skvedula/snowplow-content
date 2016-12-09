export default function GiftCardThankYou_orderConfirmation() {
    (function() {
        try {
            if ('items' in window && 'transaction' in window) {
                setTimeout(function() {

                    var createAttributeString = function(attrArray, max) {
                        var attrString = "";
                        for (var i = 1; i <= max; i++) {
                            if (typeof attrArray[i.toString()] == "boolean") attrString += attrArray[i.toString()].toString();
                            else if (attrArray[i.toString()] !== "" && attrArray[i.toString()] !== undefined) attrString += attrArray[i.toString()];
                            if (i != max) attrString += "-_-";
                        }
                        return attrString;
                    };

                    var hash = function(s) {
                        var h = 0, i, chr, len;
                        if (s.length === 0) return h;
                        for (i = 0, len = s.length; i < len; i++) {
                            chr = s.charCodeAt(i);
                            h = ((h << 5) - h) + chr;
                            h |= 0;
                        }
                        return h;
                    };
                    var sa9 = function() {
                        if ('items' in window && 'transaction' in window) {
                            var shopperId = bt_cookie('nordstrom').substring(bt_cookie('nordstrom').indexOf('shopperid=')+10,bt_cookie('nordstrom').indexOf('&'));
                            var orderNum = hash(transaction.id);
                            for (var i = 0; i < items.length; i++) {
                                var attr = [], type = (/EGC/.test(items[i].category) ? 'e' : '');
                                attr[6] = items[i].id;
                                attr[28] = items[i].sku;
                                var p = {
                                    productid: type + 'GiftCard',
                                    productname: items[i].category,
                                    quantity: items[i].quantity,
                                    baseprice: parseFloat(items[i].price),
                                    registrationid: shopperId,
                                    orderid: orderNum,
                                    ordersubtotal: parseFloat(items[i].price) * parseInt(items[i].quantity, 10),
                                    categoryid: null,
                                    attributes: createAttributeString(attr, 28),
                                    extrafields: ''
                                };

                                // order item tags
                                cmCreateShopAction9Tag(p.productid, p.productname, p.quantity, p.baseprice, p.registrationid, p.orderid, p.ordersubtotal, null, createAttributeString(attr, 28));

                                snowplow(
                                    'addItem',
                                    p.orderid,                                                     // orderID
                                    items[i].sku,                                          // SKU / product code
                                    p.productname,     // product name
                                    type + 'GiftCard',                                     // category
                                    p.baseprice,    // unit price
                                    p.quantity,                                  // quantity
                                    null,
                                    [
                                        {
                                            schema: 'iglu:com.nordstrom/order_item_attrs/jsonschema/1-1-1',
                                            data: {
                                                vendor_order_id: transaction.id
                                            }
                                        }
                                    ]
                                );

                            }

                            // order tags
                            cmCreateOrderTag(orderNum, transaction.revenue, transaction.shipping, shopperId, '', '', '', transaction.id);

                            snowplow(
                                'addTrans',
                                orderNum,                                                 // orderID
                                null,                                                       // affiliation or store name
                                transaction.revenue,       // order subtotal
                                null,              // tax
                                transaction.shipping,          // shipping total
                                null,                                                       // city
                                null,                                                       // state/province
                                null,                                                       // country
                                null                                                        // currency
                            );
                            cmDisplayShops();
                            snowplow('trackTrans');

                            return true;
                        } else {
                            setTimeout(sa9, 50);
                            return false;
                        }
                    };

                    var fireCM = function() {
                        if (typeof cmSetClientID == 'function') {
                            if (typeof(cmSetupOther) == 'function') {
                                cmSetupOther({
                                    "cm_TrackImpressions": ""
                                });
                            } else var cm_TrackImpressions = "";
                            if (/^m/.test(window.location.hostname) && /dev/.test(window.location.hostname) || /mstage1/.test(window.location.hostname) || /cashstar/.test(window.location.hostname)) cmSetClientID('81690000|81690002', false, 'testdata.coremetrics.com', 'nordstrom.com');
                            else if (/dev/.test(window.location.hostname) || /staging-shop/.test(window.location.hostname) || /cashstar/.test(window.location.hostname)) cmSetClientID('60408482;81690000|81690001', false, 'testdata.coremetrics.com', 'nordstrom.com');
                            else cmSetClientID('90033273', false, '1901.nordstrom.com', 'nordstrom.com');

                            var prod = (['shop.nordstrom.com', 'shop.giftcard.nordstrom.com', 'secure.nordstrom.com', 'm.shop.nordstrom.com', 'm.secure.nordstrom.com', 'about.nordstrom.com', 'restaurants.nordstrom.com'].indexOf(window.location.hostname) > -1 ? 1 : 0),
                                mobile = (/^m/.test(window.location.hostname) ? 1 : 0),
                                env_vars = {
                                    collector: (prod ? 'p.nordstromdata.com' : 't.nordstromdata.com'),
                                    appId: (mobile ? 'nord.mow' : 'nord.com')
                                }
                            ;
                            snowplow("newTracker", 'nord' + (prod ? '_prod' : '_dev'), env_vars.collector, 
                                {
                                    appId: env_vars.appId,
                                    cookieDomain: ".nordstrom.com",
                                    cookieName: "_sp_",
                                    pageUnloadTimer: 0,
                                    useCookies: true,
                                    bufferSize: 5,
                                    encodeBase64: false,
                                    forceSecureTracker: true
                                }
                            );

                            cmCreatePageviewTag("GiftCard Thank You", "GiftCard");
                            snowplow("trackPageView", "GiftCard Thank You", [
                                {
                                    schema: 'iglu:com.nordstrom/page_view_attrs/jsonschema/1-0-0',
                                    data: {
                                        page_url: window.location.href,
                                        page_category: "GiftCard"
                                    }
                                }
                            ]);
                            sa9();
                            return false;
                        } else setTimeout(fireCM, 50);
                    };

                    var s = document.createElement("script");
                    s.src = "//libs.coremetrics.com/eluminate.js";
                    document.body.appendChild(s);

                    (function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
                        p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments);
                        };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
                        n.src=w;g.parentNode.insertBefore(n,g);}}(window,document,"script","https://images.nordstromdata.com/js/sp/2.6.1/sp.js","snowplow"));

                    fireCM();
                }, 250);
            }
        }
        catch(e) {}
    })();
}