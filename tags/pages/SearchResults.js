import SearchResults_selectItemFilter from '../src/elements/SearchResults_selectItemFilter';
import SearchResults_pagination from '../src/elements/SearchResults_pagination';
import SearchResults_sort from '../src/elements/SearchResults_sort';

import Search from '../src/page_views/cm/Search';

Search();

function SearchResults_Tags() {
	try {
		(function () {
			var form = document.querySelector('div.nui-filters > form, div.filters-popup > form');
			if(form){
		        for (var i = 0; i < form.children.length; i++) {
		            var filter = form.children[i];
		            filter.addEventListener('click', SearchResults_selectItemFilter(filter));
		        }
		     }
		})();
		(function() {
			if(window.digitalData && window.digitalData.page && window.digitalData.page.category && window.digitalData.page.category.pageType){
				if (window.digitalData.page.category.pageType.toLowerCase() === 'search' || window.digitalData.page.category.pageType.toLowerCase() === 'browse') {
		            window.nord.core.dispatcher.register(function(payload) {
		                if (payload.action === window.nord.core.actions.ChangePage) {
		                	SearchResults_pagination(payload.newPage);
		                }
		                if (payload.action === window.nord.core.actions.ChangeSort) {
		                	SearchResults_sort(payload.newSort);
		                }
		            });
		        }
		    }
		})();
	} catch(e) {
		spLogError(e);
	}
}
SearchResults_Tags();