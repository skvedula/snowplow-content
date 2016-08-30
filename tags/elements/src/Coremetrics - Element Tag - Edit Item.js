 

    $(document).on('mouseup', $("a[id*='ctl00_mainContentPlaceHolder_shoppingBagList_orderItemRepeater'][id$='editItemImageButton']"), function() {
       window.clickstream.fire('element', ['cm','sp'], 'EDIT Item','Shopping Bag');
    });

 
