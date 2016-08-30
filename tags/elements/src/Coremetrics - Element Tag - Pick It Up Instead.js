 

    $(document).on('mouseup', $("a[id*='ctl00_mainContentPlaceHolder_shoppingBagList_orderItemRepeater'][id$='PickupInsteadLink']"), function() {
       window.clickstream.fire('element', ['cm','sp'], 'PICK IT UP INSTEAD','Shopping Bag');
    });

 

