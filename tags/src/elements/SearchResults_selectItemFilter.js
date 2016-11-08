export default function SearchResults_selectItemFilter(filter) {
	if(window.digitalData && window.digitalData.page && window.digitalData.page.category && window.digitalData.page.category.pageType){
		(function() {
		    try {
		        var filterTag = function(filter) {
		            return function(e) {
		                var categoryID = filter.querySelector('legend > a').textContent;
		                if (categoryID !== e.target.textContent && (e.target.tagName === 'span' || e.target.tagName === 'SPAN' || e.target.tagName === 'a' || e.target.tagName === 'A')) {
		                    if (digitalData.page.category.category) {
		                        cmCreateElementTag(e.target.textContent, categoryID, '-_--_--_--_--_--_--_--_--_-' + digitalData.page.category.category);
		                        spCreateElementTag(e.target.textContent, categoryID, '-_--_--_--_--_--_--_--_--_-' + digitalData.page.category.category);
		                    }
		                }
		            };
		        };
		    } catch (e) {
		         bt_log(e);
		    }
		})();
	}
}