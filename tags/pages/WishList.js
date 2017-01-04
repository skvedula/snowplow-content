import WishList_addAddress from '../src/conversions/WishList_addAddress';
import WishList_learnMore from '../src/elements/WishList_learnMore';

var owner;

if (document.querySelector('input[name="ctl00$mainContentPlaceHolder$wishListOwner"]')) owner = document.querySelector('input[name="ctl00$mainContentPlaceHolder$wishListOwner"]').value;

function WishList_Tags() {
	try {
		document.querySelector('a#ctl00_mainContentPlaceHolder_addShippingAddress').addEventListener('click', function() {
			WishList_addAddress(owner);
		});
		document.querySelector('.wl_HeadBox_HelpDiv span#ctl00_mainContentPlaceHolder_wishListHeader_helpText a').addEventListener('click', function() {
			WishList_learnMore();
		});
	}
	catch(e) { console.log(e); }
}
WishList_Tags();