window.nord.core.dispatcher.register(function (payload) {

if (payload.action === window.nord.core.actions.ProductFilterSelect) {
    if(payload.filter === 'Size')
    {
        window.clickstream.fire('element', ['cm','sp'], 'Alt Size - {'+payload.selection+'}', 'Outfit Page', digitalData.outfit.styleNumber, payload.styleNumber, null, 17, 43);
    }
    else if(payload.filter === 'Color')
    {
        window.clickstream.fire('element', ['cm','sp'], 'Alt Color - {'+payload.selection+'}', 'Outfit Page', digitalData.outfit.styleNumber, payload.styleNumber, null, 17, 43);
    }
    else if(payload.filter === 'Width')
     {   
     window.clickstream.fire('element', ['cm','sp'], 'Alt Width - {'+payload.selection+'}', 'Outfit Page', digitalData.outfit.styleNumber, payload.styleNumber, null, 17, 43);
     }
}

});