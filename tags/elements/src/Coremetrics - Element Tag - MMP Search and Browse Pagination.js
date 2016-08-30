if('digitalData' in window && 'page' in window.digitalData && 'category' in window.digitalData.page && 'pageType' in window.digitalData.page.category){
(function() {
    try {
        if (window.digitalData.page.category.pageType.toLowerCase() === 'search' || window.digitalData.page.category.pageType.toLowerCase() === 'browse') {
            window.nord.core.dispatcher.register(function(payload) {
                if (payload.action === window.nord.core.actions.ChangePage) {
                    window.clickstream.fire('element', ['cm','sp'], payload.newPage, 'Results Pagination', digitalData.page.category.category, digitalData.page.pageInfo.onsiteSearchTerm, null, 10, 38);
                }
            });
        }
    }
    catch(e) {
        console.error(e);
    }
})();
}