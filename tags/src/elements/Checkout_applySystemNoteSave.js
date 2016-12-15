export default function Checkout_applySystemNoteSave(target) {
	try {
		var attrArray=[];
		attrArray[27] = $(target).parents('li.note').find("span.amt.ng-binding").text().trim();   
		cmCreateElementTag('Available Note Apply {' + $(target).parents('li.note').find(".nord-note-error-or-msg.ng-binding").text().trim()+ '}', 'Notes Checkout', attrArray.join('-_-'));
		spCreateElementTag('Available Note Apply {' + $(target).parents('li.note').find(".nord-note-error-or-msg.ng-binding").text().trim()+ '}', 'Notes Checkout', attrArray.join('-_-'));
	}
	catch(e) { 
		spLogError(e);
	}
}