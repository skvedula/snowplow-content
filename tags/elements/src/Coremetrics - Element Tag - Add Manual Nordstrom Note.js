try {
    $(document).on('mouseup', "#payment > form > div.payment-method.nord-note.ng-scope > div.payment-information.subsection.ng-scope > input", function() {  
		window.clickstream.fire('element', ['cm','sp'], 'Add Manual Nordstrom Note', 'Notes Checkout');
	});
}
catch(e) { console.log(e); }