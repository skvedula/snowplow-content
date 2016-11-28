export default function InstantCreditApprovalSignIn_setCookie() {
	(function(){
	    if(localStorage.getItem('cardOffer') ==='visa') mmcore.SetCookie('cardOffer','visa',1);
		else if(localStorage.getItem('cardOffer') ==='retail') mmcore.SetCookie('cardOffer','retail',1);
		else if(localStorage.getItem('cardOffer') ==='debit') mmcore.SetCookie('cardOffer','debit',1);
	})();
}