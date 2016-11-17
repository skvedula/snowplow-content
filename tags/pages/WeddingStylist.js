import WeddingStylist_bookAnAppointment from '../src/elements/WeddingStylist_bookAnAppointment';

function WeddingStylist_Tags() {
	try {
		document.querySelector('#main-content > section.stylist-widget > button').addEventListener('click', function() {
			WeddingStylist_bookAnAppointment();
		});
	} catch(e) {
		spLogError(e);
	}
}
WeddingStylist_Tags();