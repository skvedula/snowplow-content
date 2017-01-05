export default function GiftCardPDP_color(color, type) {
	var attrArray = [], attrs;
	attrArray[16] = 'GiftCard';
	attrs = attrArray.join('-_-');
	cmCreateElementTag('Alt color ' + color, type + 'GiftCard', attrs);
	spCreateElementTag('Alt color ' + color, type + 'GiftCard', attrs);
}