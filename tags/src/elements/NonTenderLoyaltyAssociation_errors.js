export default function LoyaltyAssociation_errors(e) {
	function fireError(element, category) {
	    cmCreateElementTag(element, category);
	    spCreateElementTag(element, category);
	}

	var error = e.detail.message.toLowerCase();
    var clientError = e.detail.source.toLowerCase();

    switch (true) {
    /* CLIENT SIDE */
        //txtemail
        case (clientError.indexOf('txtemail') > -1):
            fireError('email invalid', 'Loyalty Error Assoc');
            break;
        //txtpasswordconfirm
        case (clientError.indexOf('txtpasswordconfirm') > -1):
            fireError('pass conf invalid', 'Loyalty Error Assoc');
            break;
        //txtPasswordMatch
        case (clientError.indexOf('txtpasswordconfirm') > -1 && error.indexOf('password') > -1):
            fireError('pass conf mismatch', 'Loyalty Error Assoc');
            break;            
        //txtpassword
        case (clientError.indexOf('txtpassword') > -1):
            fireError('pass invalid', 'Loyalty Error Assoc');
            break;
        //txtuserpassword
        case (clientError.indexOf('txtuserpassword') > -1):
            fireError('signin pass invalid', 'Loyalty Error Assoc');
            break;
        //txtphone
        case (clientError.indexOf('txtphone') > -1):
            fireError('phone invalid', 'Loyalty Error Assoc');
            break;
    /* SERVER SIDE */        
        //phone number does not match
        case (error.indexOf('phone number does not match') > -1):
            fireError('mobile no account', 'Loyalty Error Assoc');
            break;
        //canada debut rewards customer
        case (error.indexOf('canada debut rewards customer') > -1):
            fireError('Debut account already', 'Loyalty Error Assoc');
            break;
        //new account was not created  
        case (error.indexOf('new account was not created') > -1):
            fireError('Nord Account Already', 'Loyalty Error Assoc');
            break;
        //non loyalty email
        case (error.indexOf('non loyalty email') > -1):
            fireError('email store mismatch', 'Loyalty Error Assoc');
            break;
        //expired code
        case (error.indexOf('expired code') > -1):
            fireError('conf code expired', 'Loyalty Error Assoc');
            break;
        //max attempts made (code expired 2x)
        case (error.indexOf('max attempts made') > -1):
            fireError('conf code expired 2', 'Loyalty Error Assoc');
            break;
        //mobile code invalid
        case (error.indexOf('mobile code invalid') > -1):
            fireError('conf code mismatch', 'Loyalty Error Assoc');
            break;
        //max attempts made
        case (error.indexOf('max attempts made') > -1):
            fireError('conf invalid 5', 'Loyalty Error Assoc');
            break;
        //can't confirm mobile phone
        case (error.indexOf('can\'t confirm mobile phone') > -1):
            fireError('mobile conf gen', 'Loyalty Error Assoc');
            break;
        //can't send new code
        case (error.indexOf('can\'t send new code') > -1):
            fireError('New Code gen', 'Loyalty Error Assoc');
            break;
        //general error
        case (error.indexOf('general error') > -1):
            fireError('assoc fail gen', 'Loyalty Error Assoc');
            break;
        //account pending closed
        case (error.indexOf('account pending closed') > -1):
            fireError('account inact call', 'Loyalty Error Assoc');
            break;
        //canada debut rewards customer
        case (error.indexOf('canada debut rewards customer') > -1):
            fireError('canada debut', 'Loyalty Error Assoc');
            break;   
    }
}