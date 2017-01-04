export default function Checkout_selectMultiship(selection) {
	cmCreateElementTag('Ship to More Than One Address?: ' + (selection == 'true' ? 'Yes' : 'No'), 'FAST AND EASY CHECKOUT');
	spCreateElementTag('Ship to More Than One Address?: ' + (selection == 'true' ? 'Yes' : 'No'), 'FAST AND EASY CHECKOUT');
}