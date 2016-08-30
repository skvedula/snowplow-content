if (mmcore.GetCookie('btPrefStore') !== '') {
    var attrArray = [];
    attrArray["44"]  = mmcore.GetCookie('btPrefStore');
    window.clickstream.fire('element', ['cm','sp'], 'Preferred Store SE', 'Preferred Stores', mmcore.GetCookie('btPrefStore'), null, null, 44);
    mmcore.SetCookie('btPrefStore',  -1);
}
$(document).on('click', '.set-preferred-store', function() {
    mmcore.SetCookie('btPrefStore', $(this).parent().find('.store-address div').data('storeNumber'));
});