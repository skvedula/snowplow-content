import Chat_entry from '../src/elements/Chat_entry';

function Chat_Tags() {
	try {
		Chat_entry();
	} catch(e) {
		spLogError(e);
	}
}
Chat_Tags();