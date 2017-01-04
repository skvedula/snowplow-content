import Support_emailEntry from '../src/elements/Support_emailEntry';

function Email_Tags() {
	try {
		Support_emailEntry();
	} catch(e) {
		spLogError(e);
	}
}
Support_emailEntry();