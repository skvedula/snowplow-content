export default function CreditCardApplication_setCreditLocalStorage() {
	(function setCreditLocalStorage(){
	    var timer;
	    if(typeof localStorage.setItem === 'function'){
		    localStorage.setItem('cardType','credit');
		    // docCookies.setItem('cardType','Debit', 864e2, "/", 'nordstrom.com');
		    document.cookie = 'cardType=credit; max-age=' + 864e2 + '; domain=nordstrom.com;path=/;';
	    } else {
	        timer = window.setTimeout(setCreditLocalStorage, 500);
		}
	    clearTimeout(timer, 7000);    
	})();
}