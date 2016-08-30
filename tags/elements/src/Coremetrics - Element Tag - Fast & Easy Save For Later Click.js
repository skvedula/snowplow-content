 
if (mmcore.GetCookie('BTsaveForLater', true) === '') {
    $(document).on('mouseup', 'section.bag-item a.save-for-later', function() {
        mmcore.SetCookie('BTsaveForLater', '1', 0, true);
    });
}
else if (mmcore.GetCookie('BTsaveForLater', true) !== '') {
    window.clickstream.fire('element', ['cm','sp'], 'SAVE FOR LATER CLICK','FAST AND EASY CHECKOUT');
    mmcore.SetCookie('BTsaveForLater',  -1, true);
}
 
