 
if (mmcore.GetCookie('BTremoveFromBag', true) === '') {
    $(document).on('mouseup', 'a[data-ng-click="remove(item,  $event)"]', function() {
        mmcore.SetCookie('BTremoveFromBag', '1', 0, true);
    });
}
else if (mmcore.GetCookie('BTremoveFromBag', true) !== '') {
    window.clickstream.fire('element', ['cm','sp'], 'REMOVE FROM BAG CLICK','FAST AND EASY CHECKOUT');
    mmcore.SetCookie('BTremoveFromBag',  -1, true);
}
 
