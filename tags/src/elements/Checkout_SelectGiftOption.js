export default function Checkout_SelectGiftOption() {
	cmCreateElementTag($('input[data-ng-model="giftOption"]:checked').next().text(), 'FAST AND EASY CHECKOUT');
	spCreateElementTag($('input[data-ng-model="giftOption"]:checked').next().text(), 'FAST AND EASY CHECKOUT');
}