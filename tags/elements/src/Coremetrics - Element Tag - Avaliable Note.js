try {
    $(document).ready(function(){
		var	notes, notesNum, i, attrArray = [];
		notes = $("#payment > form > div.payment-method.nord-note.ng-scope > div.applied-nord-notes.ng-scope > ul > li.ng-scope.note");
		notesNum = notes.length;
		if(notesNum>1) {
			for (i = 0; i < notesNum; i++) {
				window.clickstream.fire('element', ['cm','sp'], 'Available Note {' +$(".nord-note-error-or-msg.ng-binding")[i].textContent+ '}', 'Notes Checkout', $('#payment > form > div.payment-method.nord-note.ng-scope > div.applied-nord-notes.ng-scope > ul > li > span.amount.ng-binding')[i].textContent, null, null, 28);
			}
		}
	});
}
catch(e) { console.log(e); }