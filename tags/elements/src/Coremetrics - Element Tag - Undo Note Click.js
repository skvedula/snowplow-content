try {
    $(document).on('mouseup', "#payment > form > div.payment-method.nord-note.ng-scope > div.applied-nord-notes.ng-scope > ul > li > span.buttons > a", function() { 
		window.clickstream.fire('element', ['cm','sp'], 'Available Note Undo {' +$(this).parents('li.note').find(".nord-note-error-or-msg.ng-binding").text().trim()+ '}', 'Notes Checkout', $(this).parents('li.note').find("span.amt.ng-binding").text().trim(), null, null, 28);
	});
}
catch(e) { console.log(e); }