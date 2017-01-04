import { WishList_search, WishList_found, WishList_noneFound } from '../src/elements/WishList_search';

import WishListSearch from '../src/page_views/cm/WishListSearch';

document.addEventListener('cmloaded', WishListSearch, false);

function WishListSearch_Tags() {
    try {
        document.querySelector('#ctl00_mainContentPlaceHolder_submitSearchByInfoButton,#ctl00_mainContentPlaceHolder_submitSearchByEmailButton').addEventListener('click', function() {
            WishList_search();

            setTimeout(function() {
                
                var listFound = "",
                    searchResult = "";
                if(document.querySelector("#ctl00_mainContentPlaceHolder_wishListSearchResultList_repeater_ctl00_wlListsFound"))
                    listFound = document.querySelector('#ctl00_mainContentPlaceHolder_wishListSearchResultList_repeater_ctl00_wlListsFound').textContent;    
                if(document.querySelector('#ctl00_mainContentPlaceHolder_ResourceLabel1 > span'))
                    searchResult = document.querySelector('#ctl00_mainContentPlaceHolder_ResourceLabel1 > span').textContent;

                if (searchResult.indexOf('No Wish Lists') > -1 ) {
                    WishList_noneFound();
                }        
                if (listFound.indexOf('Lists Found') > -1 ) {
                    WishList_found();
                }
            } ,3000);
        });
    } catch(e) {
        spLogError(e);
    }
}
WishListSearch_Tags();