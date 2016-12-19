export default function InstantCreditApprovalSignIn_setCookie() {
	(function(){
	    if(localStorage.getItem('cardOffer') ==='visa') document.cookie = 'cardOffer=visa;expires=1;domain=.nordstrom.com;path=/;';
		else if(localStorage.getItem('cardOffer') ==='retail') document.cookie = 'cardOffer=retail;expires=1;domain=.nordstrom.com;path=/;';
		else if(localStorage.getItem('cardOffer') ==='debit') document.cookie = 'cardOffer=debit;expires=1;domain=.nordstrom.com;path=/;';
	})();
}