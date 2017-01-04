import StoreMode_checkPages from "./StoreMode_checkPages";

export default function StoreMode_changeFilter(attrArray) {
	StoreMode_checkPages();
    //console.log('filtered');
    //check if all mode
    if(document.querySelector('.npr-store-mode-toggle > button:nth-child(1)') && document.querySelector('.npr-store-mode-toggle > button:nth-child(1)').attributes.disabled !== undefined && document.querySelector('.npr-store-mode-toggle > button:nth-child(2)').attributes.disabled.value == 'true') { attrArray = null; }
	cmCreateElementTag('filter', 'store mode', attrArray);
	spCreateElementTag('filter', 'store mode', attrArray);
}