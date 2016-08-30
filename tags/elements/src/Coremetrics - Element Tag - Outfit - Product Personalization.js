window.nord.core.dispatcher.register(function (payload) {

if (payload.action === window.nord.core.actions.ProductCustomizationMessageConfirm) {
            window.clickstream.fire('element', ['cm','sp'], 'Personalization', 'Outfit Page', digitalData.outfit.styleNumber, payload.styleNumber, null, 17, 43);
}

});