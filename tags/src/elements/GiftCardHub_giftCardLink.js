export default function GiftCardHub_giftCardLink(type) {
	var e = '';
	if (type === 'digital') e = 'e';
	if (type === 'business') e = 'Business ';
	cmCreateElementTag(e + 'Gift Card', 'Gift Card Hub');
	spCreateElementTag(e + 'Gift Card', 'Gift Card Hub');
}