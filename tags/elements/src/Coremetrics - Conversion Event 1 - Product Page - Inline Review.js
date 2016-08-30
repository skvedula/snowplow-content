if('digitalData' in window && 'page' in window.digitalData && 'category' in window.digitalData.page && 'pageType' in digitalData.page.category){
    window.nord.core.dispatcher.register(function(payload) {
    if (payload.action === window.nord.core.actions.ProductPageWriteReviewClick || payload.action === window.nord.core.actions.ProductPageViewReviewsClick) {
        var reviewConv1 = once(function(isMOW) {
            isMOW ? window.clickstream.fire('conversion', ['cm','sp'], 'INLINE REVIEWS - REVIEW CONVERSION' + (isMOW ? ' - MOW' : ''), '1', 'CUSTOMER REVIEWS');
        });
        var isMOW, star, mowStar;
        window.setTimeout(function(){
           star = document.querySelector('#ReviewSubmission > div > div > div > div > div.review-submission-step.review-submission-form > div:nth-child(3) > div > div > div > div > a'),mowStar = document.querySelector('#ReviewSubmission > div > div.review-submission-step.review-submission-form > div:nth-child(3) > div.section-left-column > div > div');       
            if (star) {
                star.addEventListener("click", function() {
                    isMOW = false;
                    reviewConv1(isMOW);
                });
            }
        if (mowStar) {
            mowStar.addEventListener("click", function() {
                isMOW = true;
                reviewConv1(isMOW);
            });
        }
        }, 500);
    }
});
function once(fn, context) {
    var result;
    return function() {
        if (fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }
        return result;
    };
}
    }