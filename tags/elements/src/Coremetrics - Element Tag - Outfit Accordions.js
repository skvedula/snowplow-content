window.nord.core.dispatcher.register(function (payload) {

if (payload.action === window.nord.core.actions.ProductDrawerToggle) {
    var isOpen;
    if(payload.type === 'DetailsAndCare')
    {
        window.clickstream.fire('element', ['cm','sp'], 'Details and Care - {'+(isOpen = payload.isOpen?'Open':'Closed')+'}', 'Outfit Page', digitalData.outfit.styleNumber, payload.styleNumber, null, 17, 43);
}
    else if(payload.type === 'ShippingAndReturns')
    {
    window.clickstream.fire('element', ['cm','sp'], 'Shipping and Returns - {'+ (isOpen = payload.isOpen?'Open':'Closed') +'}', 'Outfit Page', digitalData.outfit.styleNumber, payload.styleNumber, null, 17, 43);
    }
    else if(payload.type === 'PickupInStore')
    {
    window.clickstream.fire('element', ['cm','sp'], 'Availability - {'+(isOpen = payload.isOpen?'Open':'Closed')+'}', 'Outfit Page', digitalData.outfit.styleNumber, payload.styleNumber, null, 17, 43);
    }
    
}

});