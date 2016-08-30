if('digitalData' in window && 'page' in digitalData && 'category' in window.digitalData.page &&'pageType' in window.digitalData.page.category){
(function() {
    try {
        if (window.digitalData.page.category.pageType.toLowerCase() === 'search' || window.digitalData.page.category.pageType.toLowerCase() === 'browse') {
            window.nord.core.dispatcher.register(function(payload) {
                if (payload.action === window.nord.core.actions.ChangeSort) {
                    window.clickstream.fire('element', ['cm','sp'], ""+payload.newSort, 'Results Sort', digitalData.page.category.category, null, null, 9);
                }
            });
        }
    }
    catch(e) {
        console.error(e);
    }
})();
}