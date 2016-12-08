import BeautyBoard_addBackToBoard from '../src/elements/BeautyBoard_addBackToBoard';
import BeautyBoard_removeItem from '../src/elements/BeautyBoard_removeItem';
import BeautyBoard_signInClick from '../src/elements/BeautyBoard_signInClick';
import BeautyBoard_myRecsBeautyBoardRecsClick from '../src/elements/BeautyBoard_myRecsBeautyBoardRecsClick';
import BeautyBoard_addToBag from '../src/elements/BeautyBoard_addToBag';
import BeautyBoard_addAllToBag from '../src/elements/BeautyBoard_addAllToBag';
import Cart_beautyBoardAddToBag from '../src/elements/Cart_beautyBoardAddToBag';
import Cart_beautyBoardAddAllToBag from '../src/elements/Cart_beautyBoardAddAllToBag';
import BeautyBoard_productClick from '../src/elements/BeautyBoard_productClick';

function BeautyBoard_Tags() {
	try {
		document.querySelector('a:contains("Add Back")').addEventListener('click', function() {
			BeautyBoard_addBackToBoard();
		});
		document.querySelector('a:contains("Remove This Item")').addEventListener('click', function() {
			BeautyBoard_removeItem();
		});
		if (/beautyboard/.test(document.referrer)) BeautyBoard_signInClick();
		if (/\/c\/recommendations/.test(document.referrer)) BeautyBoard_myRecsBeautyBoardRecsClick();
		document.querySelector('.board-add-to-bag').addEventListener('click', function() {
			BeautyBoard_addToBag();
			Cart_beautyBoardAddToBag(this);
		});
		document.querySelector('#add-all-bag').addEventListener('click', function() {
			BeautyBoard_addAllToBag();
			Cart_beautyBoardAddAllToBag();
		});
		document.querySelector('a.product-href').addEventListener('click', function() {
			BeautyBoard_productClick();
		});
	} catch(e) {
		spLogError(e);
	}
}
BeautyBoard_Tags();