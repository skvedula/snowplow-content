import spCreateElementTag from '../../libs/spCreateElementTag';
import spLogError from '../../libs/spLogError';

import WeddingStylist_bookAnAppointment from '../src/elements/WeddingStylist_bookAnAppointment';

window.spCreateElementTag = spCreateElementTag;

function WeddingStylist_Tags() {
	try {
		document.addEventListener('click', '#main-content > section.stylist-widget > button', function() {
			WeddingStylist_bookAnAppointment();
		});
	} catch(e) {
		spLogError(e);
	}
}
WeddingStylist_Tags();