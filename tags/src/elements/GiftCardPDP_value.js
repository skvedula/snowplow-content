export default function GiftCardPDP_value(value) {
	var attrArray = [], attrs;
	attrArray[16] = 'GiftCard';
	attrs = attrArray.join('-_-');
	cmCreateElementTag('Alt size ' + value, 'GiftCard', attrs);
	spCreateElementTag('Alt size ' + value, 'GiftCard', attrs);
}