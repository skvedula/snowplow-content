import Outfits_productBrand from '../src/elements/Outfits_productBrand';
import Outfits_productPersonalization from '../src/elements/Outfits_productPersonalization';
import Outfits_productThumbnailImage from '../src/elements/Outfits_productThumbnailImage';
import Outfits_productTitle from '../src/elements/Outfits_productTitle';
import Outfits_reviewsLink from '../src/elements/Outfits_reviewsLink';
import Outfits_shippingReturnsLearnMore from '../src/elements/Outfits_shippingReturnsLearnMore';
import Outfits_writeReviewLink from '../src/elements/Outfits_writeReviewLink';
import Outfits_accordions from '../src/elements/Outfits_accordions';
import Outfits_imageAlt from '../src/elements/Outfits_imageAlt';
import Outfits_imageUpDown from '../src/elements/Outfits_imageUpDown';
import Outfits_imageLargeSize from '../src/elements/Outfits_imageLargeSize';
import Outfits_imageZooms from '../src/elements/Outfits_imageZooms';
import Outfits_addToWishlist from '../src/elements/Outfits_addToWishlist';
import Outfits_detailsAndCare from '../src/elements/Outfits_detailsAndCare';
import Outfits_sizeChart from '../src/elements/Outfits_sizeChart';
import Outfits_videoAlt from '../src/elements/Outfits_videoAlt';
import Outfits_altSizeColorWidth from '../src/elements/Outfits_altSizeColorWidth';
import Outfits_socialWidget from '../src/elements/Outfits_socialWidget';

function Outfits_Listener() {
	try {
		window.nord.core.dispatcher.register(function (payload) {
			Outfits_productBrand();
			Outfits_productPersonalization();
			Outfits_productThumbnailImage();
			Outfits_productTitle();
			Outfits_reviewsLink();
			Outfits_shippingReturnsLearnMore();
			Outfits_writeReviewLink();
			Outfits_accordions();
			Outfits_imageAlt();
			Outfits_imageUpDown();
			Outfits_imageLargeSize();
			Outfits_imageZooms();
			Outfits_addToWishlist();
			Outfits_detailsAndCare();
			Outfits_altSizeColorWidth();
			Outfits_socialWidget();
		});
	}
	catch(e) { console.warn(e); }
}
Outfits_Listener();