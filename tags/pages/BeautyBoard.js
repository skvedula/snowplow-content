import BeautyBoard_addBackToBoard from '../src/elements/BeautyBoard_addBackToBoard';
import BeautyBoard_removeItem from '../src/elements/BeautyBoard_removeItem';
import BeautyBoard_productClick from '../src/elements/BeautyBoard_productClick';
import BeautyBoard_myRecsBeautyBoardRecsClick from '../src/elements/BeautyBoard_myRecsBeautyBoardRecsClick';
import BeautyBoard_addToBag from '../src/elements/BeautyBoard_addToBag';
import BeautyBoard_addAllToBag from '../src/elements/BeautyBoard_addAllToBag';
import Cart_beautyBoardAddToBag from '../src/cart/Cart_beautyBoardAddToBag';
import Cart_beautyBoardAddAllToBag from '../src/cart/Cart_beautyBoardAddAllToBag';

function BeautyBoard_Tags() {
	try {
		var tag_id = '4556358';
		if (/\/c\/recommendations/.test(document.referrer)) BeautyBoard_myRecsBeautyBoardRecsClick();
		if (window.nord && nord.core && nord.core.dispatcher && nord.core.dispatcher.register) {
			nord.core.dispatcher.register(function(payload) {
				if (payload.action === 'ShoppingBagAdded') {
					if (payload.data.length > 1) BeautyBoard_addAllToBag();
					else BeautyBoard_addToBag();
					Cart_beautyBoardAddToBag(payload.data, tag_id);
				}
			});
		}
		document.addEventListener('click', function(e) {
			if (e.target.className === 'board-toggle-removed') {
				if (e.target.textContent === 'Remove This Item') BeautyBoard_removeItem();
				else if (e.target.textContent === 'Add Back') BeautyBoard_addBackToBoard();
			}
			if (e.target.className === 'product-photo' || e.target.parentNode.className === 'product-href') BeautyBoard_productClick();
		});
	} catch(e) {
		spLogError(e);
	}
}
BeautyBoard_Tags();