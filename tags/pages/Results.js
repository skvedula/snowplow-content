import StoreMode_checkIfStoreSet from "../src/elements/StoreMode_checkIfStoreSet";
import StoreMode_selectStoreMode from "../src/elements/StoreMode_selectStoreMode";
import StoreMode_selectStoreModeNoPayload from "../src/elements/StoreMode_selectStoreModeNoPayload";
import StoreMode_changeSort from "../src/elements/StoreMode_changeSort";
import StoreMode_changeFilter from "../src/elements/StoreMode_changeFilter";
import StoreMode_setStore from "../src/elements/StoreMode_setStore";
import StoreMode_changeStore from "../src/elements/StoreMode_changeStore";
import Results_interactiveHeader from "../src/elements/Results_interactiveHeader";
import Results_filter from "../src/elements/Results_filter";
    	
var storeNumber = StoreMode_checkIfStoreSet();
var attrArray = null;
if (storeNumber) {
	attrArray = [];
	attrArray[47] = storeNumber;
	attrArray = attrArray.join('-_-');
}

if('digitalData' in window && 'page' in digitalData && 'category' in window.digitalData.page &&'pageType' in window.digitalData.page.category){
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
	         bt_log(e);
	    }
	})();
}

if (window.nord && nord.core && nord.core.dispatcher) {
    window.nord.core.dispatcher.register(function(payload) {
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

        if (payload.action === window.nord.core.actions.ApplyInteractiveHeaderFilters) {
        	var type = payload.payload[0].optionId;
            Results_interactiveHeader(type);
        }
    });
}