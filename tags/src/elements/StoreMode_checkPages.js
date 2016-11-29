export default function StoreMode_checkPages(attrArray) {
	setTimeout(function() {
        if((digitalData.page.pageInfo.onsiteSearchResults/digitalData.page.pageInfo.onsiteSearchResultsPerPage)< 1 && (digitalData.page.pageInfo.onsiteSearchResults/digitalData.page.pageInfo.onsiteSearchResultsPerPage) !== 0) {
            //console.log('less than 1 page');
			cmCreateElementTag('less than 1 page', 'store mode', attrArray);
			spCreateElementTag('less than 1 page', 'store mode', attrArray);
        } else if ((digitalData.page.pageInfo.onsiteSearchResults/digitalData.page.pageInfo.onsiteSearchResultsPerPage) == 0) {
            //console.log('no items returned');
			cmCreateElementTag('no items returned', 'store mode', attrArray);
			spCreateElementTag('no items returned', 'store mode', attrArray);
        }
    }, 1000);
}