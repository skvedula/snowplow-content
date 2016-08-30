 
if (mmcore.GetCookie('BTeditInBag', true) === '') {
    $(document).on('mouseup', 'section.bag-item a#edit', function() {
        mmcore.SetCookie('BTeditInBag', '1', 0, true);
  });
}
else if (mmcore.GetCookie('BTeditInBag', true) !== '') {
    window.clickstream.fire('element', ['cm','sp'], 'EDIT IN SHOPPING BAG CLICK','FAST AND EASY CHECKOUT');
    mmcore.SetCookie('BTeditInBag',  -1, true);
}
 
