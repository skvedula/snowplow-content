import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Checkout_addNote(payload, attrs) {
	try {
			cmCreateElementTag('Add Manual Nordstrom Note', 'Notes Checkout');
			spCreateElementTag('Add Manual Nordstrom Note', 'Notes Checkout');
	}
	catch(e) { console.log(e); }
}