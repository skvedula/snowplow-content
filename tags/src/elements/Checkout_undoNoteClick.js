export default function Checkout_undoNoteClick(target) {
	var attrArray=[];
	attrArray["28"] = $(target).parents('li.note').find("span.amt.ng-binding").text().trim();    
	cmCreateElementTag('Available Note Undo {' +$(target).parents('li.note').find(".nord-note-error-or-msg.ng-binding").text().trim()+ '}', 'Notes Checkout', mmcore.nord.BTUtils.createAttributeString(attrArray, 28));
	spCreateElementTag('Available Note Undo {' +$(target).parents('li.note').find(".nord-note-error-or-msg.ng-binding").text().trim()+ '}', 'Notes Checkout', mmcore.nord.BTUtils.createAttributeString(attrArray, 28));
}