export default function Search() {
	function createAttributeString(attrArray, max) {
	    var attrString = "";
	    for (var i = 1; i <= max; i++) {
	        if(typeof attrArray[i.toString()] == "boolean") attrString += attrArray[i.toString()].toString();
	        else if(attrArray[i.toString()] !== "" && attrArray[i.toString()] !== undefined) attrString += attrArray[i.toString()];
	        if(i != max) attrString += "-_-";
	    }
	    return attrString;
	}

    var returningStatus, attrArray = [], pageID, categorys = typeof window.digitalData.page.category.category === 'string' ? window.digitalData.page.category.category.split('~') : {}, keyword = null;
    keyword = (digitalData.page.pageInfo.onsiteSearchTerm && digitalData.page.pageInfo.onsiteSearchTerm !== '' ? digitalData.page.pageInfo.onsiteSearchTerm.replace(/-/g, ' ') : bt_parameter('keyword'));
	var modernPage = function() {
	    if(document.cookie.split('; ').indexOf('BR=1') > -1) return 'Y';
	    else if(document.cookie.split('; ').indexOf('BR=0') > -1) return 'N';
	    else return 'cookie tempered';
    };

    attrArray[22] = ((window.digitalData.shopper.authenticatedState === "Registered" || window.digitalData.shopper.authenticatedState === "Authenticated") ? "Y" : "N");

    var elwin;
    try {
      var e = JSON.stringify(digitalData.elwin.Experiments);
      if (e !== 'null') {
        elwin = e;
      }
    } catch (err) {
      console.log(err);
      elwin = '';
    }
    
    var isStoreMode = "All Items";
    if((document.cookie).split("storemode=id=").length > 1) {
        isStoreMode = (document.cookie).split("storemode=id=")[1].split('&')[0];
    }

    var guidIndex = document.cookie.indexOf('ExperimentId=') || null;
    attrArray[29] = isStoreMode;
    attrArray[31] = (guidIndex ? document.cookie.slice(guidIndex+13, guidIndex+49) : '');
    attrArray[32] = elwin;
    attrArray[35] = modernPage(); 
    attrArray[36] = window.digitalData.page.category.pageType.toLowerCase();
    attrArray[42] = '4188974';

    if(window.digitalData.page.category.pageType.toLowerCase() === 'browse') {
       pageID = window.location.pathname;
    } else if (window.digitalData.page.category.pageType.toLowerCase() === 'search') {
       pageID = 'RESULTS: ' + document.querySelector('h1').textContent.trim().replace(/[^a-zA-Z\s\d]/g, '') + ' > P.1 - DF- (' + categorys[categorys.length-1] + ')';
    }

    if(digitalData.page.category.deviceType.toLowerCase() ==='mobile' || window.location.hostname =='m.shop.nordstrom.com'){
      pageID += '- MOW'; 
    }

    cmCreatePageviewTag(pageID, window.digitalData.page.category.category, keyword, digitalData.page.pageInfo.onsiteSearchResults, createAttributeString(attrArray, 42));
}