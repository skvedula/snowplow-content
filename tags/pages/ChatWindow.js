import Chat_accepted from '../src/elements/Chat_accepted';
import Chat_ended from '../src/elements/Chat_ended';

function Chat_Tags() {
	try {
		document.addEventListener('agentID', function(e) {
			Chat_accepted(e);
		});

		document.addEventListener("click", "button[id*='ChatDisconnect']", function(e) {
			Chat_ended(e);
		});
	} catch(e) {
		spLogError(e);
	}
}
Chat_Tags();