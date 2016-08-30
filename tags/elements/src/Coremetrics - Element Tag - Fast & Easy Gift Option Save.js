try {
    $(document).on('mouseup', '[data-ng-show^="giftOptionAvailable"] .radioActions input[type=button].save:lt(3)', function() {
		setTimeout(function() {
			window.clickstream.fire('element', ['cm','sp'], 'Gift Option' + ($('.content.gift').hasClass('show')?' Error':''), 'FAST AND EASY CHECKOUT');
		}, 3000);
	});
}
catch(e) { console.log(e); }