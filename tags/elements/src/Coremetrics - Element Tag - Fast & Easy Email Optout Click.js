try {
    $(document).on('click', 'input[data-ng-model*="subscribeForEmailUpdates"]:not(:checked)', function() {
		window.clickstream.fire('element', ['cm','sp'], 'Guest Email Opt-out' + (/paypal.com/.test(document.referrer) && /token/.test(window.location.search) ? ' - PayPal' : ''), 'FAST AND EASY CHECKOUT');
	});
}
catch(e) { console.log(e); }