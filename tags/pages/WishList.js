import WishList_addAddress from '../src/conversions/WishList_addAddress';
import WishList_learnMore from '../src/conversions/WishList_learnMore';

function WishList_Tags() {
	document.querySelector('a#ctl00_mainContentPlaceHolder_addShippingAddress').addEventListener('click', function() {
		WishList_addAddress(document.querySelector('input[name="ctl00$mainContentPlaceHolder$wishListOwner"]').value);
	});
	document.querySelector('.wl_HeadBox_HelpDiv span#ctl00_mainContentPlaceHolder_wishListHeader_helpText a').addEventListener('click', function() {
		WishList_learnMore();
	});
}