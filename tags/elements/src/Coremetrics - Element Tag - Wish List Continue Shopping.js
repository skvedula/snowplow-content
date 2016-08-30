if(typeof document.getElementsByTagName('meta')['nord-pp-react'] === 'undefined') {
if (window.location.pathname.toLowerCase().indexOf('/wishlist.aspx')>-1) {
    $(document).on('mouseup', 'a#ctl00_mainContentPlaceHolder_wishListHeader_continueShopping_continueShoppingButton', function() {
        mmcore.SetCookie('wishlist_continue', 1);
    });
}

var wishContinue = setInterval(function(){
if (typeof mmcore.GetCookie === 'function' && mmcore.GetCookie('wishlist_continue') != '') {
    window.clickstream.fire('element', ['cm','sp'], 'Continue Shopping','Wishlist');  
    mmcore.SetCookie('wishlist_continue',  -1);
    clearInterval(wishContinue);
}

}, 100);

setTimeout(function() { clearInterval(wishContinue); }, 1000);
}