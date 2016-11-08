export default function ShoppingBag_StoreMode_shoppingBagClicks() {
	var itemRepeater = document.querySelectorAll('.item-module');
	var productNumber = "", 
	    storeNumber = "";

	function shipIt(productNumber, storeNumber) {
	  return function ship() {
	    var attributeArray = [];
	    attributeArray[16] = productNumber;
	    attributeArray[48] = storeNumber;
	    var attrArray = attributeArray.join('-_-');
	    var ecat = "Shop Bag Store Availability";
	    var eid = "ship to an address";    
		cmCreateElementTag(ecat, eid, attrArray);
		spCreateElementTag(ecat, eid, attrArray);
	  };
	}

	function pickUp(productNumber, storeNumber) {
	  return function pick() {
	    var attributeArray = [];
	    attributeArray[16] = productNumber;
	    attributeArray[48] = storeNumber;
	    var attrArray = attributeArray.join('-_-');
	    var ecat = "Shop Bag Store Availability";
	    var eid = "BOPUS";
	    
	    cmCreateElementTag(ecat, eid, attrArray);
	    spCreateElementTag(ecat, eid, attrArray);
	  };
	}

	for(var items = 0; items < itemRepeater.length; items++) {
	    if('PageParameters' in window && 'orderInfo' in PageParameters && 'items' in PageParameters.orderInfo && PageParameters.orderInfo.items.length > 0 && PageParameters.orderInfo.items[items] !== undefined) {
	        if(PageParameters.orderInfo.items[items].styleNumber !== undefined) {
	            productNumber = PageParameters.orderInfo.items[items].styleNumber;
	        }
	        if(PageParameters.orderInfo.items[items].storeId !== undefined) {
	            storeNumber = PageParameters.orderInfo.items[items].storeId;        
	        }
	    }
	    var x = document.querySelectorAll('.item-module')[items].querySelectorAll('img');
	    var buttonName = x[x.length-1].alt;
	    if(buttonName == 'SHIP IT INSTEAD')
	      x[x.length-1].addEventListener('click', shipIt(productNumber, storeNumber));
	    if(buttonName == 'PICK IT UP INSTEAD')
	      x[x.length-1].addEventListener('click', pickUp(productNumber, storeNumber));      
	}
}