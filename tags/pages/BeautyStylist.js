import BeautyStylist_bookAnAppointmentTimeTrade from '../src/elements/BeautyStylist_bookAnAppointmentTimeTrade';

function BeautyStylist_Tags() {
	try {
		document.querySelector('p.apptButton a, .-appointment-button a, button.appointment-button').addEventListener('click', function() {
			BeautyStylist_bookAnAppointmentTimeTrade();
		});
	} catch(e) {
		spLogError(e);
	}
}
BeautyStylist_Tags();