import getURLParameter from '../../utils/getURLParameter';

export default function StoreMode_changeSort(attrArray) {
	var sortUsed = getURLParameter('sort');
    //console.log('sort used: ' + sortUsed);
    //check if all mode
    if(document.querySelector('.npr-store-mode-toggle > button:nth-child(1)') && document.querySelector('.npr-store-mode-toggle > button:nth-child(1)').attributes.disabled !== undefined && document.querySelector('.npr-store-mode-toggle > button:nth-child(1)').attributes.disabled.value == 'true') { attrArray = null; }
	cmCreateElementTag('sort', 'store mode', attrArray);
	spCreateElementTag('sort', 'store mode', attrArray);
}