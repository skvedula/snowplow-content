export default function GiftCardPDP_color(color) {
	var attrArray = [], attrs;
	attrArray[16] = 'GiftCard';
	attrs = attrArray.join('-_-');
	cmCreateElementTag('Alt color ' + color, 'GiftCard', attrs);
	spCreateElementTag('Alt color ' + color, 'GiftCard', attrs);
}