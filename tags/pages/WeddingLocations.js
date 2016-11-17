import WeddingStylist_bookAnAppointment from '../src/elements/WeddingStylist_bookAnAppointment';

function WeddingLocation_Tags() {
	try {
		document.querySelector('a[title="BOOK AN APPOINTMENT"]').addEventListener('click', function() {
			WeddingStylist_bookAnAppointment();
		});
	} catch(e) {
		spLogError(e);
	}
}
WeddingLocation_Tags();