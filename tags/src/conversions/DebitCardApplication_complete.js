export default function DebitCardApplication_complete() {
	var MOW = false, attr = '';
    MOW = (/moov.osecure/.test(window.location.hostname) || /m.osecure/.test(window.location.hostname) || /m.secure/.test(window.location.hostname));
    if (MOW) attr = ' - MOW';
	cmCreateConversionEventTag("Debit Application" + attr, 2, "Apply & Buy");
	spCreateConversionEventTag("Debit Application" + attr, 2, "Apply & Buy");
}