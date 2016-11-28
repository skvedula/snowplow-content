export default function eGiftCardPDP_value(value) {
	var attrArray = [], attrs;
	attrArray[16] = 'eGiftCard';
	attrs = attrArray.join('-_-');
	cmCreateElementTag('Alt size ' + value, 'eGiftCard', attrs);
	spCreateElementTag('Alt size ' + value, 'eGiftCard', attrs);
}