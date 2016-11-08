import spCreateElementTag from '../../libs/spCreateElementTag';
import spLogError from '../../libs/spLogError';

import MyAccount_beautyBoard from '../src/elements/MyAccount_beautyBoard';

window.spCreateElementTag = spCreateElementTag;

function Product_Tags() {
	try {
		document.addEventListener('click', '#ctl00_mainContentPlaceHolder_leftMenu_BeautyBoardLink', function() {
			MyAccount_beautyBoard();
		});
	} catch(e) {
		spLogError(e);
	}
}
Product_Tags();