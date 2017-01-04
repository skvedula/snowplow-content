import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_imageUpDown(payload, attrs) {
	if (payload.action === window.nord.core.actions.GalleryThumbnailCarouselNext || payload.action === window.nord.core.actions.GalleryThumbnailCarouselPrevious) {
		cmCreateElementTag('Image Alt Carousel Browse', 'Outfit Page', attrs);
		spCreateElementTag('Image Alt Carousel Browse', 'Outfit Page', attrs);
	}
}