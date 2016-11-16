import spCreateElementTag from '../../libs/spCreateElementTag';
import spLogError from '../../libs/spLogError';

import WishList_addAddress from '../src/conversions/WishList_addAddress';
import WishList_learnMore from '../src/conversions/WishList_learnMore';

window.spCreateElementTag = spCreateElementTag;
window.spCreateConversionEventTag = spCreateElementTag;

function WishList_Tags() {
	document.addEventListener('click', 'a#ctl00_mainContentPlaceHolder_addShippingAddress', function() {
		WishList_addAddress(document.querySelector('input[name="ctl00$mainContentPlaceHolder$wishListOwner"]').value);
	});
	document.addEventListener('click', '.wl_HeadBox_HelpDiv span#ctl00_mainContentPlaceHolder_wishListHeader_helpText a', function() {
		WishList_learnMore();
	});
}