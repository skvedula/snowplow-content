export default function GiftCardPDP_value(value, type) {
	var attrArray = [], attrs;
	attrArray[16] = 'GiftCard';
	attrs = attrArray.join('-_-');
	cmCreateElementTag('Alt size ' + value, type + 'GiftCard', attrs);
	spCreateElementTag('Alt size ' + value, type + 'GiftCard', attrs);
}