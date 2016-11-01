import spCreateElementTag from '../../libs/spCreateElementTag';
import spLogError from '../../libs/spLogError';

export default function Checkout_applyNote() {
	try {
		var attrArray=[];
		attrArray[27] = $(this).parents('li.note').find("span.amt.ng-binding").text().trim();   
		cmCreateElementTag('Available Note Apply {' + $(this).parents('li.note').find(".nord-note-error-or-msg.ng-binding").text().trim()+ '}', 'Notes Checkout', attrArray.join('-_-'));
		spCreateElementTag('Available Note Apply {' + $(this).parents('li.note').find(".nord-note-error-or-msg.ng-binding").text().trim()+ '}', 'Notes Checkout', attrArray.join('-_-'));
	}
	catch(e) { 
		spLogError(e);
	}
}