export default function Outfits(payload) {
	try {
		if (payload && payload.action) {
			var element_id, attrArray=[], attrs;

			attrArray[16] = window.digitalData.outfit.styleNumber || null;
			attrArray[42] = payload.styleNumber || null;
			attrs = attrArray.join('-_-') || null;

			switch (payload.action) {
				case 'ProductDrawerToggle':
					switch (payload.type) {
						case 'DetailsAndCare':
							element_id = 'Details and Care';
							break;
						case 'ShippingAndReturns':
							element_id = 'Shipping and Returns';
							break;
						case 'PickupInStore':
							element_id = 'Availability';
							break;
						default:
							break;
					}
					if (element_id) element_id += ' - {' + (payload.isOpen ? 'Open' : 'Closed') + '}';
					break;

				case 'ProductWishlistButtonClick':
					element_id = 'Wishlist';
					break;

				case 'ProductFilterSelect':
					switch (payload.filter) {
						case 'Size':
							element_id = 'Alt Size';
							break;
						case 'Color':
							element_id = 'Alt Color';
							break;
						case 'Width':
							element_id = 'Alt Width';
							break;
						default:
							break;
					}
					if (element_id) element_id +=  ' - {' + payload.selection + '}';
					break;

				case 'ProductDetailsAndCareLinkClick':
					switch (true) {
						case /Fit Fundamentals/.test(payload.title):
							element_id = 'Fit Fundamentals';
							break;
						case /Athletic Shoe Fit Guide/.test(payload.title):
							element_id = 'Athletic Shoe Fit Guide';
							break;
						default:
							element_id = 'Product Learn More';
							break;
					}
					break;

				case 'GalleryNavigate':
				case 'SwipeGalleryAnimationComplete':
					if (payload.MediaType === 'Image' && payload.hasOwnProperty('index')) element_id = 'Image Alt {' + payload.index + '}';
					else if (payload.MediaType === 'Video') element_id = 'Video Alt - {360}';
					break;

				case 'GalleryModalShow':
				case 'SwipeGalleryZoomModalShow':
					element_id = 'Large Image';
					break;

				case 'GalleryThumbnailCarouselNext':
				case 'GalleryThumbnailCarouselPrevious':
					element_id = 'Image Alt Carousel Browse';
					break;

				case 'GalleryWindowClick':
				case 'SwipeGalleryZoomModalRelease':
				case 'SwipeGalleryZoomModalTap':
					element_id = 'Image Zoom';
					break;

				case 'ProductBrandTitleClick':
					element_id = 'Brand';
					break;

				case 'ProductCustomizationMessageConfirm':
					element_id = 'Personalization';
					break;

				case 'ProductThumbnailClick':
					element_id = 'Product - Image Link';
					break;

				case 'ProductTitleClick':
					element_id = 'Product - Name Link';
					break;

				case 'ReviewSummaryViewReviews':
					element_id = 'Reviews Link';
					break;

				case 'GiftOptionsModalShow':
					element_id = 'Shipping Learn More - {GiftOption}';
					break;

				case 'SameDayDeliveryModalShow':
					element_id = 'Shipping Learn More - {SameDayDelivery}';
					break;

				case 'ProductSizeChartShow':
					element_id = 'Size Chart';
					break;

				case 'ProductShareButtonClick':
					if (payload.type) element_id = 'Social - {' + payload.type + '}';
					break;

				case 'ReviewSummaryWriteReview':
					element_id = 'Write a review link';
					break;

				default:
					break;
			}

			if (element_id) {
				cmCreateElementTag(element_id, 'Outfit Page', attrs);
				spCreateElementTag(element_id, 'Outfit Page', attrs);
			}
		}
	}
	catch(e) { console.log(e); }
}