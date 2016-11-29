export default function DebitCardApplication_setDebitLocalStorage() {
	(function setDebitLocalStorage(){
	    var timer;
	    if(typeof localStorage.setItem === 'function'){
		    localStorage.setItem('cardType','debit');
		    // docCookies.setItem('cardType','Debit', 864e2, "/", 'nordstrom.com');
		    document.cookie = 'cardType=debit; max-age=' + 864e2 + '; domain=nordstrom.com;path=/;';
	    } else {
	        timer = window.setTimeout(setDebitLocalStorage, 500);
		}
	    clearTimeout(timer, 7000);    
	})();
}