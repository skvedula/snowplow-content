if('digitalData' in window && 'page' in digitalData && 'category' in window.digitalData.page &&'pageType' in window.digitalData.page.category){
(function() {
    try {
        var form = document.querySelector('div.nui-filters > form, div.filters-popup > form');

        var filterTag = function(el) {
            return function(e) {
                var categoryID = el.querySelector('legend > a').textContent;
                if (categoryID !== e.target.textContent && (e.target.tagName === 'span' || e.target.tagName === 'SPAN' || e.target.tagName === 'a' || e.target.tagName === 'A')) {
                    if ('digitalData' in window && 'page' in digitalData && 'category' in digitalData.page && 'category' in digitalData.page.category) {
                        window.clickstream.fire('element', ['cm','sp'], e.target.textContent, categoryID, digitalData.page.category.category, null, null, 9);
                    }
                }
            };
        };
     if(form !== null){
        for (var i = 0; i < form.children.length; i++) {
            var filter = form.children[i];
            filter.addEventListener('mouseup', filterTag(filter));
        }
     }
    } catch (e) {
         bt_log(e);
    }
})();
}