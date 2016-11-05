import spCreateElementTag from '../../libs/spCreateElementTag';
import spLogError from '../../libs/spLogError';

import Support_emailEntry from '../src/elements/Support_emailEntry';

window.spCreateElementTag = spCreateElementTag;

function Email_Tags() {
	try {
		Support_emailEntry();
	} catch(e) {
		spLogError(e);
	}
}
Support_emailEntry();