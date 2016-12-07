import ShoppingBag_continueShopping from '../src/elements/ShoppingBag_continueShopping';
import ShoppingBag_editItem from '../src/elements/ShoppingBag_editItem';
import ShoppingBag_inlineEditQuantity from '../src/elements/ShoppingBag_inlineEditQuantity';
import ShoppingBag_makeItAGift from '../src/elements/ShoppingBag_makeItAGift';
import ShoppingBag_changeStore from '../src/elements/ShoppingBag_changeStore';
import ShoppingBag_pickItUpInstead from '../src/elements/ShoppingBag_pickItUpInstead';
import ShoppingBag_removeItem from '../src/elements/ShoppingBag_removeItem';
import ShoppingBag_StoreMode_shoppingBagClicks from '../src/elements/ShoppingBag_StoreMode_shoppingBagClicks';

import ShoppingBag from '../src/page_views/cm/ShoppingBag';

document.addEventListener('cmloaded', ShoppingBag, false);

function ShoppingBag_Tags() {
	try {
		document.querySelector('a[id$="continueShopping"]').addEventListener('click', function() {
			ShoppingBag_continueShopping();
		});
		document.querySelector('[id$="editItemImageButton"]').addEventListener('click', function() {
			ShoppingBag_editItem();
		});
		document.querySelector('a[id*="ctl00_mainContentPlaceHolder_shoppingBagList_orderItemRepeater"][id$="editqtylink"]').addEventListener('click', function() {
			ShoppingBag_inlineEditQuantity();
		});
		document.querySelector('a:contains("Make it a gift.")').addEventListener('click', function() {
			ShoppingBag_makeItAGift();
		});
		document.querySelector('a[id$="changeStoreLink"]').addEventListener('click', function() {
			ShoppingBag_changeStore();
		});
		document.querySelector('[id$="PickupInsteadLink"]').addEventListener('click', function() {
			ShoppingBag_pickItUpInstead();
		});
		document.querySelector('[id$="removeItemImageButton"]').addEventListener('click', function() {
			ShoppingBag_removeItem();
		});
		ShoppingBag_StoreMode_shoppingBagClicks();
	} catch(e) {
		spLogError(e);
	}
}
ShoppingBag_Tags();