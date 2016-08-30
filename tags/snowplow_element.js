function sp_element() {
	if (window.snowplow) {
		// results filter engage
		try {
			$('.bizrate-panel a.button').on('click', function() {
				// btCreateElementTag('Bizrate Survey Link Clicked','Bizrate Survey',null);
				// snowplow('trackStructEvent', category, action, label, property, null, )
				// snowplow('trackStructEvent', 'element', 'click', 'survey', 'Bizrate')
				snowplow('trackUnstructEvent', {
					schema: 'iglu:com.nordstrom.snowplow/elements/jsonschema/0-0-2',
					data: {
						action: 'click'
						, target1: 'link'
						, target2: $(this)
						, property1: 'survey'
						, property2: 'Bizrate'
						, page_url: window.location.href
					}
				});
			});
		}
		catch(e) {
			snowplow('trackStructEvent', 'error', null, e);
		}
	}
}
if (window.sp_pv) sp_element();
else if (document.addEventListener) document.addEventListener('sp_pv', sp_element, true);
else if(document.attachEvent) {
	document.documentElement['sp_pv'] = 0;
	document.documentElement.attachEvent("onpropertychange", function(event) {
		if (event.propertyName == 'sp_pv') {
			sp_element();
		}
	});
}