import spCreateElementTag from '../../libs/spCreateElementTag';
import spLogError from '../../libs/spLogError';

import WeddingStylist_bookAnAppointment from '../src/elements/WeddingStylist_bookAnAppointment';

window.spCreateElementTag = spCreateElementTag;

function WeddingLocation_Tags() {
	try {
		document.addEventListener('click', 'a[title="BOOK AN APPOINTMENT"]', function() {
			WeddingStylist_bookAnAppointment();
		});
	} catch(e) {
		spLogError(e);
	}
}
WeddingLocation_Tags();