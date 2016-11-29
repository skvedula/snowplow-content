export default function NordstromCard_applyButton() {
	if(/ProductSelectedForApplication=1/.test(location.search)) {
 		cmCreateElementTag("Apply Button - Credit", "Apply & Buy");
 		spCreateElementTag("Apply Button - Credit", "Apply & Buy");
 	}
	else if(/ProductSelectedForApplication=2/.test(location.search)) {
 		cmCreateElementTag("Apply Button - Debit", "Apply & Buy");	
 		spCreateElementTag("Apply Button - Debit", "Apply & Buy");	
 	}
}