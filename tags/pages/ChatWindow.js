import Chat_accepted from '../src/elements/Chat_accepted';
import Chat_ended from '../src/elements/Chat_ended';

function Chat_Tags() {
	try {
		document.addEventListener('agentID', function(e) {
			Chat_accepted(e);
		});
		document.addEventListener('click', function(e) {
			if (e.target.textContent === 'End Chat') Chat_ended();
		});
	} catch(e) {
		spLogError(e);
	}
}
Chat_Tags();