export default function AllNonsecure_SignInComplete() {
	if (/cardOffer/.test(document.cookie) && window.opt.PC.read('auth') === 'LI'){
 		if (typeof cmCreateElementTag != 'undefined') {
       		if (/registrantInfo/.test(document.cookie)) {
       			cmCreateElementTag('Create Account','Apply and Buy');
       			spCreateElementTag('Create Account','Apply and Buy');
       		}
       		else {
       			cmCreateElementTag('Sign In', 'Apply and Buy');
       			spCreateElementTag('Sign In', 'Apply and Buy');
       		}
        	document.cookie = 'cardOffer=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain=.nordstrom.com;';
        }
    }
}