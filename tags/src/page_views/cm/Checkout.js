export default function Checkout() {
	try {
	    var returningStatus = (!$('li#shopperSignIn').is(':visible') ? 'Y' : 'N');
		cmCreatePageviewTag('CHECKOUT','FAST AND EASY CHECKOUT',null,null,'-_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_-' + returningStatus,null);
	}
	catch(e) { console.log(e); }
}