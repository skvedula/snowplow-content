import spCreateElementTag from '../../libs/spCreateElementTag';
import spLogError from '../../libs/spLogError';

import BeautyStylist_bookAnAppointmentTimeTrade from '../src/elements/BeautyStylist_bookAnAppointmentTimeTrade';

window.spCreateElementTag = spCreateElementTag;

function BeautyStylist_Tags() {
	try {
		document.addEventListener('click', 'p.apptButton a, .-appointment-button a, button.appointment-button', function() {
			BeautyStylist_bookAnAppointmentTimeTrade();
		});
	} catch(e) {
		spLogError(e);
	}
}
Chat_Tags();