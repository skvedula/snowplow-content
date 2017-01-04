export default function StoresEvents_preferredStore(store_number) {
	var attrArray = [];
    attrArray[43]  = store_number;
    cmCreateElementTag('Preferred Store SE', 'Preferred Stores', attrArray.join('-_-'));
    spCreateElementTag('Preferred Store SE', 'Preferred Stores', attrArray.join('-_-'));
} 