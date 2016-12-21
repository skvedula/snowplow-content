import { WishList_search, WishList_found, WishList_noneFound } from '../src/elements/WishList_search';

function WishListSearch_Tags() {
    try {
        [].forEach.call(document.querySelectorAll('#ctl00_mainContentPlaceHolder_submitSearchByInfoButton,#ctl00_mainContentPlaceHolder_submitSearchByEmailButton'), function(el) {
            el.addEventListener('click', function() {
                WishList_search();
                checkSearchResults();
            });
        });
    } catch (e) {
        spLogError(e);
    }
}
WishListSearch_Tags();

function checkSearchResults() {
        var ListsFound = document.querySelector('#ctl00_mainContentPlaceHolder_wishListSearchResultList_repeater_ctl00_wlListsFound'),
        	noResultsFound = document.querySelector('#ctl00_mainContentPlaceHolder_ResourceLabel1 > span');	
		
		var listFound,
    		searchResult;
    	
    	var firstName1 = document.querySelector('#ctl00_mainContentPlaceHolder_lblSearchCriteria').textContent.split(' ')[1];
    	var firstName2 = document.querySelector('#ctl00_mainContentPlaceHolder_searchForm_searchFormFirstName').value;
    	var lastName1 = document.querySelector('#ctl00_mainContentPlaceHolder_lblSearchCriteria').textContent.split(', ')[0];
    	var lastName2 = document.querySelector('#ctl00_mainContentPlaceHolder_searchForm_searchFormLastName').value;

    if (ListsFound !== null && lastName1 == lastName2 && firstName1 == firstName2 ) {
        listFound = document.querySelector('#ctl00_mainContentPlaceHolder_wishListSearchResultList_repeater_ctl00_wlListsFound').textContent;
        if (listFound.indexOf('Lists Found') > -1) {
            WishList_found();
        }
    } else if (noResultsFound !== null && lastName1 == lastName2 && firstName1 == firstName2 ) {
    	console.log(document.querySelector('#ctl00_mainContentPlaceHolder_ResourceLabel1 > span'));
        searchResult = document.querySelector('#ctl00_mainContentPlaceHolder_ResourceLabel1 > span').textContent;
        if (searchResult.indexOf('No Wish Lists') > -1) {
            WishList_noneFound();
        }
    } else {
        setTimeout(checkSearchResults, 100);
    }
}