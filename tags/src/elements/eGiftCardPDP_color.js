export default function eGiftCardPDP_color(color) {
	var attrArray = [], attrs;
	attrArray[16] = 'eGiftCard';
	attrs = attrArray.join('-_-');
	cmCreateElementTag('Alt color ' + color, 'eGiftCard', attrs);
	spCreateElementTag('Alt color ' + color, 'eGiftCard', attrs);
}