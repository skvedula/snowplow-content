export default function StoreMode_checkIfStoreSet() {
	if(bt_cookie('storemode')) {
        if(bt_cookie('storemode').split('=')[1].split('&')[0]) {
            var storeNumber = bt_cookie('storemode').split('=')[1].split('&')[0];
            //console.log("store number: " + storeNumber);
            return storeNumber;
        }
    } 
    else {
        //console.log("no store selected");
        return "NO LOCATION";
    }
}