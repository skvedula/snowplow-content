export default function Checkout_multishipItemShipMethodSelect(shipMethod) {
	if (document.querySelector('.js-shippping-select:visible')) {
		cmCreateElementTag('ShipMethod Modal: ' + shipMethod, 'FAST AND EASY CHECKOUT');
		spCreateElementTag('ShipMethod Modal: ' + shipMethod, 'FAST AND EASY CHECKOUT');
	}
}