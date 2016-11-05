import spCreateElementTag from '../../libs/spCreateElementTag';
import spLogError from '../../libs/spLogError';

import Chat_entry from '../src/elements/Chat_entry';

window.spCreateElementTag = spCreateElementTag;

function Chat_Tags() {
	try {
		Chat_entry();
	} catch(e) {
		spLogError(e);
	}
}
Chat_Tags();