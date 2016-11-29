export default function LoyaltyEnroll_errors(e) {
	function fireError(element, category) {
	    cmCreateElementTag(element, category);
	    spCreateElementTag(element, category);
	}

	var error = e.detail.message.toLowerCase();
    var clientError = e.detail.source.toLowerCase();

    switch (true) {
    /* CLIENT SIDE */
        //txtFirstName
        case (clientError.indexOf('txtfirstname') > -1):
            fireError('F-Name miss', 'Loyalty Error Enroll');
            break;
        //txtLastName
        case (clientError.indexOf('txtlastname') > -1):
            fireError('L-Name miss', 'Loyalty Error Enroll');
            break;
        //txtPhone
        case (clientError.indexOf('txtphone') > -1):
            fireError('mobile invalid', 'Loyalty Error Enroll');
            break;
        //txtEmail
        case (clientError.indexOf('txtemail') > -1):
            fireError('email invalid', 'Loyalty Error Enroll');
            break;
        //txtUserPassword
        case (clientError.indexOf('txtuserpassword') > -1):
            fireError('pass invalid', 'Loyalty Error Enroll');
            break;
        //txtPasswordConfirm
        case (clientError.indexOf('txtpasswordconfirm') > -1):
            fireError('pass conf invalid', 'Loyalty Error Enroll');
            break;
        //txtPasswordMatch
        case (clientError.indexOf('txtpasswordconfirm') > -1 && error.indexOf('password') > -1):
            fireError('pass conf mismatch', 'Loyalty Error Enroll');
            break;            
        //chkAcceptTerms
        case (clientError.indexOf('chkacceptterms') > -1):
            fireError('no check accept terms', 'Loyalty Error Enroll');
            break;
            
    /* SERVER SIDE */    
        //account already mobile
        case (error.indexOf('mobile number already exists') > -1):
            fireError('account already mobile', 'Loyalty Error Enroll');
            break;
        //account already email
        case (error.indexOf('rewards account already exists') > -1):
            fireError('account already email', 'Loyalty Error Enroll');
            break;
        //account already call
        case (error.indexOf('migrated beauty customer') > -1):
            fireError('account already call', 'Loyalty Error Enroll');
            break;
        //enroll down new
        case (error.indexOf('nord account created but rewards account failed to create') > -1):
            fireError('enroll down new', 'Loyalty Error Enroll');
            break;
        //guest session timeout
        case (error.indexOf('guest session timeout') > -1):
            fireError('guest secure timeout', 'Loyalty Error Enroll');
            break;
        //authenticated session timeout
        case (error.indexOf('authenticated session timeout') > -1):
            fireError('auth secure timeout', 'Loyalty Error Enroll');
            break;
        //rewards account pending closed
        case (error.indexOf('rewards account pending closed') > -1):
            fireError('call reactivate account', 'Loyalty Error Enroll');
            break;
    }
}