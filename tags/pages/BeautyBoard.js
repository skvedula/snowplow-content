import spCreateElementTag from '../../libs/spCreateElementTag';
import spLogError from '../../libs/spLogError';

import BeautyBoard_addBackToBoard from '../src/elements/BeautyBoard_addBackToBoard';
import BeautyBoard_removeItem from '../src/elements/BeautyBoard_removeItem';
import BeautyBoard_signInClick from '../src/elements/BeautyBoard_signInClick';
import BeautyBoard_myRecsBeautyBoardRecsClick from '../src/elements/BeautyBoard_myRecsBeautyBoardRecsClick';
import BeautyBoard_addToBag from '../src/elements/BeautyBoard_addToBag';
import BeautyBoard_addAllToBag from '../src/elements/BeautyBoard_addAllToBag';
import Cart_beautyBoardAddToBag from '../src/elements/Cart_beautyBoardAddToBag';
import Cart_beautyBoardAddAllToBag from '../src/elements/Cart_beautyBoardAddAllToBag';
import BeautyBoard_productClick from '../src/elements/BeautyBoard_productClick';

window.spCreateElementTag = spCreateElementTag;

function BeautyBoard_Tags() {
	try {
		document.addEventListener('click', 'a:contains("Add Back")', function() {
			BeautyBoard_addBackToBoard();
		});
		document.addEventListener('click', 'a:contains("Remove This Item")', function() {
			BeautyBoard_removeItem();
		});
		if (/beautyboard/.test(document.referrer)) BeautyBoard_signInClick();
		if (/\/c\/recommendations/.test(document.referrer)) BeautyBoard_myRecsBeautyBoardRecsClick();
		document.addEventListener('click', '.board-add-to-bag', function() {
			BeautyBoard_addToBag();
			Cart_beautyBoardAddToBag(this);
		});
		document.addEventListener('click', '#add-all-bag', function() {
			BeautyBoard_addAllToBag();
			Cart_beautyBoardAddAllToBag();
		});
		document.addEventListener('click', 'a.product-href', function() {
			BeautyBoard_productClick();
		});
	} catch(e) {
		spLogError(e);
	}
}
BeautyBoard_Tags();