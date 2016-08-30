window.nord.core.dispatcher.register(function (payload) {

if (payload.action === window.nord.core.actions.ReviewSummaryWriteReview) {
         window.clickstream.fire('element', ['cm','sp'], 'Write a review link', 'Outfit Page', digitalData.outfit.styleNumber, payload.styleNumber, null, 17, 43);

}

});