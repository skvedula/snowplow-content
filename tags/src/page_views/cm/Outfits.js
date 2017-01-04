export default function Outfits() {
	if (!('$' in window)) {
	    $ = BrightTag.$;
	}

	function createAttributeString(attrArray, max) {
	    var i, attrString = "";
	    for (i = 1; i <= max; i++) {
	        if (typeof attrArray[i.toString()] == "boolean") {
	            attrString += attrArray[i.toString()].toString();
	        } else if (attrArray[i.toString()] != "" && attrArray[i.toString()] != undefined) {
	            attrString += attrArray[i.toString()];
	        }
	        if (i != max) {
	            attrString += "-_-";
	        }
	    }
	    return attrString;
	}

	function decodeHtmlNumeric(str) {
	    return str.replace(/&#([0-9]{1,7});/g, function(g, m1) {
	        return String.fromCharCode(parseInt(m1, 10));
	    }).replace(/&#[xX]([0-9a-fA-F]{1,6});/g, function(g, m1) {
	        return String.fromCharCode(parseInt(m1, 16));
	    });
	}
	var prod_string, ref_page_catID;

    prod_string = "OUTFIT: " + digitalData.outfit.styleName + " (" + digitalData.outfit.styleNumber + ")";
    ref_page_catID = digitalData.outfit.parentCategory;

	function fireProductView() {
	    // product view tag

	    var fit_value = "null",
	        category_id = 'On outfit page',
	        isLoggedIn = (digitalData.shopper.authenticatedState === 'Authenticated' ? true : false);

	    if (digitalData.product[0].productInfo.fitRecommendation.trufitEligible) {
	        fit_value = "TF";
	        if (!isLoggedIn) fit_value += "_U";
	        else if (truFitRecommendation && isLoggedIn) fit_value += "_RR";
	        else if (!truFitRecommendation && isLoggedIn) fit_value += "_NR";
	    }


	    if (window.location.href.indexOf("origin=PredictiveSearchProducts") !== -1) category_id = 'PREDICTIVE SEARCH POPULAR RESULTS';
	    //TODO: update when digitalData.componenet is available
	    var attrArray = [];

	    for (var i = 0; i < digitalData.product.length; i++) {
	        try{
		        attrArray["14"] = fit_value;
		        attrArray["19"] = digitalData.product[i].productInfo.productID;
		        attrArray["29"] = digitalData.outfit.styleNumber;
		        attrArray["30"] = (i === 0 ? 'Y' : 'N');
		        attrArray["31"] = (digitalData.product[i].productInfo.percentageOff !== null ? digitalData.product[i].productInfo.percentageOff.replace('%', '') : '0');
		        attrArray["32"] = (digitalData.product[i].productInfo.saleType === 'rack' ? 'Y' : 'N');
				attrArray["42"] = '1973507'; //signal tag id
		        cmMakeTag(["tid", "5", "pi", decodeHtmlNumeric(prod_string), "pr", digitalData.product[i].productInfo.styleNumber, "pm", decodeHtmlNumeric(digitalData.product[i].productInfo.productName), "cg", category_id, "pc", "N", "li", "4", "ps1", digitalData.product[i].productInfo.styleNumber, "ps2", decodeHtmlNumeric(digitalData.product[i].productInfo.productName), "ps3", category_id, "ps4", decodeHtmlNumeric(prod_string), "ps5", null, "ps6", null, "cm_vc", cmExtractParameter("cm_vc", document.location.href), "cmAttributes", createAttributeString(attrArray, 43)]);
	        }
	        catch(e){bt_log(e);}
	    }
	}

    var pageID = digitalData.outfit.outfitID;

    var attrArray = [];
    //attrArray["10"] = window.digitalData.product.productInfo.styleNumber;
    attrArray["22"] = ((window.digitalData.shopper.authenticatedState === "Registered" || window.digitalData.shopper.authenticatedState === "Authenticated") ? "Y" : "N");
    // attrArray["30"] = 'Y';
    attrArray["31"] = ('elwin' in window.digitalData  && window.digitalData.elwin && 'elwinId' in window.digitalData.elwin) ? window.digitalData.elwin.elwinId : '';
    attrArray["32"] = ('elwin' in window.digitalData  && window.digitalData.elwin && 'elwinData' in window.digitalData.elwin) ? JSON.stringify(window.digitalData.elwin.elwinData) : '';
    attrArray["36"] = window.digitalData.page.category.pageType|| '';
    attrArray["42"] = '1973507';//signal tag id
    
    cmCreatePageviewTag(prod_string.replace(/\'/, "").replace('é', "e"), (ref_page_catID ? ref_page_catID + ' Recommended Item' : window.digitalData.product[0].category.parentCategory), null, null, createAttributeString(attrArray, 43));

    fireProductView();
}