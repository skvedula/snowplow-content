import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_imageUpDown() {
	if (payload.action === window.nord.core.actions.GalleryThumbnailCarouselNext || payload.action === window.nord.core.actions.GalleryThumbnailCarouselPrevious) {
		var attrArray=[];
		attrArray[16] = digitalData.outfit.styleNumber;
		attrArray[42] = payload.styleNumber;
		cmCreateElementTag('Image Alt Carousel Browse', 'Outfit Page', attrArray.join('-_-'));
		spCreateElementTag('Image Alt Carousel Browse', 'Outfit Page', attrArray.join('-_-'));
	}
}