export default function Product() {
    function createAttributeString(attrArray, max) {
        var attrString = "";
        for (var i = 1; i <= max; i++) {
            if (typeof attrArray[i.toString()] == "boolean") attrString += attrArray[i.toString()].toString();
            else if (attrArray[i.toString()] !== "" && attrArray[i.toString()] !== undefined) attrString += attrArray[i.toString()];
            if (i != max) attrString += "-_-";
        }
        return attrString;
    }

    var isMMP = false,
        i, metaTag, metaTags = [];

    function loadTags() {
        var prod_string = "Product: " + window.digitalData.product.productInfo.productName + " (" + window.digitalData.product.productInfo.styleNumber + ")";

        var fireCM = function() {
            if (typeof cmSetClientID == 'function' && ('product' in window.digitalData && 'productInfo' in window.digitalData.product && 'productName' in window.digitalData.product.productInfo && 'styleNumber' in window.digitalData.product.productInfo)) {
                var ref_page_catID = (bt_parameter('PageCategoryId') ? bt_parameter('PageCategoryId') : bt_parameter('recs_categoryId'));
                if (/mstage1.shop/.test(window.location.hostname) || /mstage1.secure/.test(window.location.hostname) || /m.shop/.test(window.location.hostname) || /m.secure/.test(window.location.hostname)) prod_string += ' - MOW'; // Page ID

                var isStoreMode = "All Items";
                if ((document.cookie).split("storemode=id=").length > 1) {
                    isStoreMode = (document.cookie).split("storemode=id=")[1].split('&')[0];
                }

                var pageID = window.digitalData.product.productInfo.productID,
                    attrArray = [];
                attrArray["10"] = window.digitalData.product.productInfo.styleNumber;
                attrArray["22"] = ((window.digitalData.shopper.authenticatedState === "Registered" || window.digitalData.shopper.authenticatedState === "Authenticated") ? "Y" : "N");
                attrArray["29"] = isStoreMode;
                attrArray["30"] = 'Y';
                attrArray["31"] = ('elwin' in window.digitalData && 'elwinId' in window.digitalData.elwin) ? window.digitalData.elwin.elwinId : '';
                attrArray["32"] = ('elwin' in window.digitalData && 'elwinData' in window.digitalData.elwin) ? JSON.stringify(window.digitalData.elwin.elwinData) : '';
                attrArray["36"] = window.digitalData.page.category.pageType;
                attrArray["42"] = '3069252'; //signal tag id
                cmCreatePageviewTag(prod_string.replace(/\'/, "").replace('é', "e"), (ref_page_catID ? ref_page_catID + ' Recommended Item' : window.digitalData.product.category.parentCategory), null, null, createAttributeString(attrArray, 43), prod_string.replace(/\'/, "").replace('é', "e") + '-_-MMP_PDP');
                fireProductViewMMP();

            } else setTimeout(fireCM, 50);
        };

        function fireProductViewMMP() {
            var fit_value = "null",
                category_id = window.digitalData.product.category.parentCategory || "siteentryviaproductpage/",
                isLoggedIn = (window.digitalData.shopper.authenticatedState === 'Authenticated' ? true : false);

            var isStoreMode = "All Items";
            if ((document.cookie).split("storemode=id=").length > 1) {
                isStoreMode = (document.cookie).split("storemode=id=")[1].split('&')[0];
            }

            if (window.location.href.indexOf("origin=PredictiveSearchProducts") !== -1) category_id = 'PREDICTIVE SEARCH POPULAR RESULTS';
            var attrArray = [];
            attrArray["19"] = window.digitalData.product.productInfo.productID;
            attrArray["31"] = (window.digitalData.product.productInfo.percentageOff !== null ? window.digitalData.product.productInfo.percentageOff.replace('%', '') : '0');
            attrArray["32"] = (window.digitalData.product.productInfo.banners[0] === 'PriceMatch' ? 'Y' : 'N');
            attrArray["34"] = (window.digitalData.product.productInfo.banners[0] === 'PreOrder' ? 'Y' : 'N');
            attrArray["35"] = 'Y';
            attrArray["37"] = isStoreMode;
            attrArray["42"] = '3069252'; //signal tag id
            cmMakeTag(["tid", "5", "pi", prod_string, "pr", window.digitalData.product.productInfo.styleNumber, "pm", window.digitalData.product.productInfo.productName, "cg", category_id, "pc", "N", "li", "4", "ps1", window.digitalData.product.productInfo.styleNumber, "ps2", window.digitalData.product.productInfo.productName, "ps3", category_id, "ps4", prod_string, "ps5", null, "ps6", null, "cm_vc", cmExtractParameter("cm_vc", document.location.href), "cmAttributes", createAttributeString(attrArray, 43)]);
        }
        try {
            fireCM();
        } catch (e) {
            bt_log(e);
        }
    }
    loadTags();
}