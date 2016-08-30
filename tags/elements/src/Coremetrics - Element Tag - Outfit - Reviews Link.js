window.nord.core.dispatcher.register(function (payload) {

if (payload.action === window.nord.core.actions.ReviewSummaryViewReviews) {
      window.clickstream.fire('element', ['cm','sp'], 'Reviews Link', 'Outfit Page', digitalData.outfit.styleNumber, payload.styleNumber, null, 17, 43);
}

});