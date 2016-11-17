import MyAccount_beautyBoard from '../src/elements/MyAccount_beautyBoard';

function MyAccount_BeautyBoard_Tags() {
	try {
		document.querySelector('#ctl00_mainContentPlaceHolder_leftMenu_BeautyBoardLink').addEventListener('click', function() {
			MyAccount_beautyBoard();
		});
	} catch(e) {
		spLogError(e);
	}
}
MyAccount_BeautyBoard_Tags();