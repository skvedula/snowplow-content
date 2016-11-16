import spCreateElementTag from '../../libs/spCreateElementTag';
import spLogError from '../../libs/spLogError';

import { WishList_search, WishList_found, WishList_noneFound } from '../src/elements/WishList_search';

window.spCreateElementTag = spCreateElementTag;

function WishListSearch_Tags() {
	try {
		document.addEventListener('click', '#ctl00_mainContentPlaceHolder_submitSearchByInfoButton,#ctl00_mainContentPlaceHolder_submitSearchByEmailButton', function() {
			wishListSearch();

			setTimeout(function() {
		        var searchResult = document.querySelector('#ctl00_mainContentPlaceHolder_ResourceLabel1 > span').textContent;
		        var listFound = document.querySelector('#ctl00_mainContentPlaceHolder_wishListSearchResultList_repeater_ctl00_wlListsFound').textContent;    
		        if (searchResult.indexOf('No Wish Lists') > -1 ) {
		            wishListNoneFound();
		        }        
		        if (listFound.indexOf('Lists Found') > -1 ) {
		            wishListFound();
		        }
		    } ,3000);
		});
	} catch(e) {
		spLogError(e);
	}
}
WishListSearch_Tags();