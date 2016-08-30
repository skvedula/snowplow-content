
if ($('input[value="publicWishList"]').is(':checked')) {
    window.clickstream.fire('conversion', ['cm','sp'], 'Wish List Make Public','2','Wish List','[[Wish List Owner Shopper ID]]', null, null, 2);
}    
if ($('input[value="privateWishList"]').is(':checked')) {
    window.clickstream.fire('conversion', ['cm','sp'], 'Wish List Make Private','2','Wish List','[[Wish List Owner Shopper ID]]', null, null, 2);
}   
