import StoreMode_checkIfStoreSet from "../src/elements/StoreMode_checkIfStoreSet";
import StoreMode_selectStoreMode from "../src/elements/StoreMode_selectStoreMode";
import StoreMode_selectStoreModeNoPayload from "../src/elements/StoreMode_selectStoreModeNoPayload";
import StoreMode_changeSort from "../src/elements/StoreMode_changeSort";
import StoreMode_changeFilter from "../src/elements/StoreMode_changeFilter";
import StoreMode_setStore from "../src/elements/StoreMode_setStore";
import StoreMode_changeStore from "../src/elements/StoreMode_changeStore";
import Results_interactiveHeader from "../src/elements/Results_interactiveHeader";
import Results_filter from "../src/elements/Results_filter";
import Results_pagination from "../src/elements/Results_pagination";
import Results_pagination_page from "../src/page_views/Results_pagination_page";
import Results_sort from "../src/elements/Results_sort";
import Results_videoPresented from "../src/elements/Results_videoPresented";
import Results_wcmVideoClick from "../src/link_clicks/Results_wcmVideoClick";
import Results_showMore from "../src/elements/Results_showMore";
    	
var storeNumber = StoreMode_checkIfStoreSet();
var attrArray = null;
if (storeNumber) {
	attrArray = [];
	attrArray[47] = storeNumber;
	attrArray = attrArray.join('-_-');
}

if(window.digitalData && digitalData.page && digitalData.page.category && digitalData.page.category.pageType){
	// Results_filter
	(function() {
	    try {
	        var form = document.querySelector('div.nui-filters > form, div.filters-popup > form');

	        var filterTag = function(el) {
	            return function(e) {
	                var categoryID = el.querySelector('legend > a').textContent;
	                if (categoryID !== e.target.textContent && (e.target.tagName === 'span' || e.target.tagName === 'SPAN' || e.target.tagName === 'a' || e.target.tagName === 'A')) {
	                    if ('category' in digitalData.page.category) {
	                        Results_filter(e.target.textContent, categoryID, '-_--_--_--_--_--_--_--_--_-' + digitalData.page.category.category);
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
	         spLogError(e);
	    }
	})();
	// Results_pagination and Results_sort
	(function() {
	    try {
	        // if (window.digitalData.page.category.pageType.toLowerCase() === 'search' || window.digitalData.page.category.pageType.toLowerCase() === 'browse') {
	            window.nord.core.dispatcher.register(function(payload, runAsTask) {
	            	if (runAsTask) return false;
	                if (payload.action === window.nord.core.actions.ChangePage) {
	                    var attrArray=[];
					    attrArray[9] = digitalData.page.category.category;
					    attrArray[37] = digitalData.page.pageInfo.onsiteSearchTerm;
					    attrArray = attrArray.join('-_-');
	                    Results_pagination(payload.newPage, 'Results Pagination', attrArray);
	                    Results_pagination_page(window.location.pathname, bt_parameter('keyword'), (window.digitalData && digitalData.page && digitalData.page.pageInfo && digitalData.page.pageInfo.onsiteSearchResults ? digitalData.page.pageInfo.onsiteSearchResults : null), attrArray);
	                }

	                if (payload.action === window.nord.core.actions.ChangeSort) {
	                    Results_sort(""+payload.newSort, 'Results Sort', '-_--_--_--_--_--_--_--_--_-' + digitalData.page.category.category);
	                }

	                if (payload.action === 'LoadMoreProducts') {
	                    Results_showMore();
	                }

	                // Store Mode
			        //Store
			        if(payload.action === 'SelectStoreMode' && payload.payload) {
			        	StoreMode_selectStoreMode(attrArray);
			        }
			        
			        //All Items
			        if (payload.action === 'SelectStoreMode' && !payload.payload) {
			        	StoreMode_selectStoreModeNoPayload();
			        }
			        
			        //Sort
			        if(payload.action === 'ChangeSort') {
			        	StoreMode_changeSort(attrArray);
			        }
			        
			        //Filter
			        if(payload.action === 'ChangeFilter') {
			        	StoreMode_changeFilter(attrArray);
			        }
			        
			        //Set Your Store
			        if(payload.action === 'StoreLocationInterfaceOpen') {
						if(document.querySelector('.npr-store-mode-toggle > div > a') && document.querySelector('.npr-store-mode-toggle > div > a').innerText == 'Set Your Store') {
							StoreMode_setStore(attrArray);
						}
						else if (document.querySelector('.npr-store-mode-toggle > div > a') && document.querySelector('.npr-store-mode-toggle > div > a').innerText == 'Change') {
			            	StoreMode_changeStore(attrArray);
			            }
			        }
			        
			        if(payload.action === 'StoreLocationInterfaceClose') {
			        	StoreMode_changeStore(attrArray);
			        }

			        if (payload.action === window.nord.core.actions.ApplyInteractiveHeaderFilters && payload.payload && payload.payload[0] && payload.payload[0].optionId) {
			        	var data = payload.payload;
			            Results_interactiveHeader(data);
			        }
	            });
	        // }
	    }
	    catch(e) {
	        spLogError(e);
	    }
	})();
	(function() {
		setTimeout(function(){
		    try {
		    	var videos = document.querySelectorAll('#product-results-page > div > section > div > article:nth-child(n) > div.product-video-container').length;
		    	if(videos) Results_videoPresented(videos);
			}
			catch(e) { console.log(e); }
		}, 3000);
	})();
	(function() {
	  [].forEach.call(document.querySelectorAll('#main-content section.video-html5'), function(i) {
	    var v = i.querySelector('video');
	    v.addEventListener('play', function cmTag(){
	      var data = JSON.parse(i.getAttribute('data-cm-tags'));
	      Results_wcmVideoClick(window.location.href + (window.location.search ? '&' : '?') + "cm_sp=" + data.manual_cm_sp + '&cm_re=' + data.manual_cm_re);
	      v.removeEventListener('play', cmTag, false);
	    }, false);
	  });
	})();
}