export default function Checkout_availableNote() {
	var	notes, notesNum, i, attrArray = [];
	notes = document.querySelectorAll("#payment > form > div.payment-method.nord-note.ng-scope > div.applied-nord-notes.ng-scope > ul > li.ng-scope.note");
	notesNum = notes.length;
	if(notesNum>1) {
		for (i = 0; i < notesNum; i++) {
			attrArray[27] = document.querySelectorAll('#payment > form > div.payment-method.nord-note.ng-scope > div.applied-nord-notes.ng-scope > ul > li > span.amount.ng-binding')[i].innerHTML;
			cmCreateElementTag('Available Note {' + document.querySelectorAll(".nord-note-error-or-msg.ng-binding")[i].innerHTML+ '}', 'Notes Checkout', attrArray.join('-_-'));
			spCreateElementTag('Available Note {' + document.querySelectorAll(".nord-note-error-or-msg.ng-binding")[i].innerHTML+ '}', 'Notes Checkout', attrArray.join('-_-'));
		}
	}
}