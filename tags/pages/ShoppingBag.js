import spCreateElementTag from '../../libs/spCreateElementTag';
import spLogError from '../../libs/spLogError';

import ShoppingBag_continueShopping from '../src/elements/ShoppingBag_continueShopping';
import ShoppingBag_editItem from '../src/elements/ShoppingBag_editItem';
import ShoppingBag_inlineEditQuantity from '../src/elements/ShoppingBag_inlineEditQuantity';
import ShoppingBag_makeItAGift from '../src/elements/ShoppingBag_makeItAGift';
import ShoppingBag_changeStore from '../src/elements/ShoppingBag_changeStore';
import ShoppingBag_pickItUpInstead from '../src/elements/ShoppingBag_pickItUpInstead';
import ShoppingBag_removeItem from '../src/elements/ShoppingBag_removeItem';
import ShoppingBag_StoreMode_shoppingBagClicks from '../src/elements/ShoppingBag_StoreMode_shoppingBagClicks';

window.spCreateElementTag = spCreateElementTag;

function ShoppingBag_Tags() {
	try {
		document.addEventListener('click', 'a[id$="continueShopping"]', function() {
			ShoppingBag_continueShopping();
		});
		document.addEventListener('click', '[id$="editItemImageButton"]', function() {
			ShoppingBag_editItem();
		});
		document.addEventListener('click', 'a[id*="ctl00_mainContentPlaceHolder_shoppingBagList_orderItemRepeater"][id$="editqtylink"]', function() {
			ShoppingBag_inlineEditQuantity();
		});
		document.addEventListener('click', 'a:contains("Make it a gift.")', function() {
			ShoppingBag_makeItAGift();
		});
		document.addEventListener('click', 'a[id$="changeStoreLink"]', function() {
			ShoppingBag_changeStore();
		});
		document.addEventListener('click', '[id$="PickupInsteadLink"]', function() {
			ShoppingBag_pickItUpInstead();
		});
		document.addEventListener('click', '[id$="removeItemImageButton"]', function() {
			ShoppingBag_removeItem();
		});
		ShoppingBag_StoreMode_shoppingBagClicks();
	} catch(e) {
		spLogError(e);
	}
}
ShoppingBag_Tags();