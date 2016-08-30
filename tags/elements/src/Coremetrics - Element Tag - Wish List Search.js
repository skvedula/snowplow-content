$(document).on('click','#ctl00_mainContentPlaceHolder_submitSearchByInfoButton,#ctl00_mainContentPlaceHolder_submitSearchByEmailButton', function(){ 
    window.clickstream.fire('element', ['cm','sp'], 'Wishlist Search','Wishlist');  

    setTimeout(function() {
        var searchResult = $('#ctl00_mainContentPlaceHolder_ResourceLabel1 > span').text();
        var listFound = $('#ctl00_mainContentPlaceHolder_wishListSearchResultList_repeater_ctl00_wlListsFound').text();    
        if (searchResult.indexOf('No Wish Lists') > -1 ) {
            window.clickstream.fire('element', ['cm','sp'], 'Wishlist Search None Found','Wishlist');
        }        
        if (listFound.indexOf('Lists Found') > -1 ) {
            window.clickstream.fire('element', ['cm','sp'], 'Wishlist Search Result Found','Wishlist');
        }
    } ,3000);
});