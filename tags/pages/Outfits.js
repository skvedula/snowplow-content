import Outfits_imageAltMobile from '../src/elements/Outfits_imageAltMobile';
import Outfits_productBrand from '../src/elements/Outfits_productBrand';
import Outfits_productPersonalization from '../src/elements/Outfits_productPersonalization';
import Outfits_productThumbnailImage from '../src/elements/Outfits_productThumbnailImage';
import Outfits_productTitle from '../src/elements/Outfits_productTitle';

function Outfits_Listener() {
	window.nord.core.dispatcher.register(function (payload) {
		Outfits_imageAltMobile();
		Outfits_productBrand();
		Outfits_productPersonalization();
		Outfits_productThumbnailImage();
		Outfits_productTitle();
	}
}
Outfits_Listener();