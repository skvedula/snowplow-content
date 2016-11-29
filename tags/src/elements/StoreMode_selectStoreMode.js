import StoreMode_checkPages from "../src/elements/StoreMode_checkPages";

export default function StoreMode_selectStoreMode(attrArray) {
	StoreMode_checkPages(attrArray);
    //console.log('in your store');
	cmCreateElementTag('in your store', 'store mode', attrArray);
	spCreateElementTag('in your store', 'store mode', attrArray);
}