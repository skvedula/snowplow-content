window.nord.core.dispatcher.register(function (payload) {

if (payload.action === window.nord.core.actions.GiftOptionsModalShow ) {
        window.clickstream.fire('element', ['cm','sp'], 'Shipping Learn More - {GiftOption}', 'Outfit Page', digitalData.outfit.styleNumber, payload.styleNumber, null, 17, 43);
}
else if (payload.action === window.nord.core.actions.SameDayDeliveryModalShow ) {
        window.clickstream.fire('element', ['cm','sp'], 'Shipping Learn More - {SameDayDelivery}', 'Outfit Page', digitalData.outfit.styleNumber, payload.styleNumber, null, 17, 43);
}

});