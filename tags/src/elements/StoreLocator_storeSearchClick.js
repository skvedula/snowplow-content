export default function StoreLocator_storeSearchClick() {
	function ATO_map_click() {
	    if (document.querySelector('.alert-error') !== null) {
	        var eid, err = document.querySelector('.alert-error').innerHTML;
	        if (/Please enter a valid city/.test(err)) eid = 'invalid entry';
	        else if (/This store is no longer open/.test(err)) eid = 'store closed';
	        else if (/store information is currently unavailable/.test(err)) eid = 'store info unavailable';
	        else if (/event has already happened/.test(err)) eid = 'past event';
	        else if (/event information is currently unavailable/.test(err)) eid = 'event info unavailable';
	        cmCreateElementTag('Error: ' + eid, 'STORES & EVENTS');
	        spCreateElementTag('Error: ' + eid, 'STORES & EVENTS');
	    }
	}
	ATO_map_click();

	if (!(docCookies.hasItem('btStoreSearch'))) {
	    if(document.querySelector('button#store-search-submit, button#error-search-submit') !== null) {
		    document.querySelector('button#store-search-submit, button#error-search-submit').addEventListener('mouseup', function() {
		        docCookies.setItem('btStoreSearch', document.querySelector('input#store-search-input').value, (new Date()).setDate(+10), '/', '.nordstrom.com');
		        setTimeout(ATO_map_click, 1500);
		    });
		}
		if(document.querySelector('input#store-search-input, input#error-search-input') !== null) {
		    document.querySelector('input#store-search-input, input#error-search-input').addEventListener('keyup', function(e) {
		        if (e.keyCode === 13) {
		            docCookies.setItem('btStoreSearch', document.querySelector('input#store-search-input').value, (new Date()).setDate(+10), '/', '.nordstrom.com');
		            setTimeout(ATO_map_click, 1500);
		        }
		    });
	    }
	}
	else {
	    cmCreateElementTag('Search: ' + docCookies.getItem('btStoreSearch'), 'STORES & EVENTS');
	    spCreateElementTag('Search: ' + docCookies.getItem('btStoreSearch'), 'STORES & EVENTS');
	    docCookies.removeItem('btStoreSearch', '/', '.nordstrom.com');
	}
} 