export default function LoyaltyEnrollVerification_errors(e) {
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
            fireError('email invalid', 'Loyalty Error Enroll');
            break;
        //txtpassword
        case (clientError.indexOf('txtpassword') > -1):
            fireError('pass invalid', 'Loyalty Error Enroll');
            break;
        //txtuserpassword
        case (clientError.indexOf('txtuserpassword') > -1):
            fireError('signin pass invalid', 'Loyalty Error Enroll');
            break;
        //txtpasswordconfirm
        case (clientError.indexOf('txtpasswordconfirm') > -1):
            fireError('pass conf invalid', 'Loyalty Error Enroll');
            break;
        //txtPasswordMatch
        case (clientError.indexOf('txtpasswordconfirm') > -1 && error.indexOf('password') > -1):
            fireError('pass conf mismatch', 'Loyalty Error Enroll');
            break;
        //txtphone
        case (clientError.indexOf('txtphone') > -1):
            fireError('phone invalid', 'Loyalty Error Enroll');
            break;
    /* SERVER SIDE */
        //expired code
        case (error.indexOf('expired code') > -1):
            fireError('conf code expired', 'Loyalty Error Enroll');
            break;
        //mobile code invalid
        case (error.indexOf('mobile code invalid') > -1):
            fireError('conf code mismatch', 'Loyalty Error Enroll');
            break;
        //max attempts made
        case (error.indexOf('max attempts made') > -1):
            fireError('conf invalid 5', 'Loyalty Error Enroll');
            break;
        //max verification attempts made
        case (error.indexOf('max verification attempts made') > -1):
            fireError('multi code request', 'Loyalty Error Enroll');
            break;
        //can't confirm mobile phone for unknown reason
        case (error.indexOf('confirm mobile phone for unknown reason') > -1):
            fireError('conf fail gen', 'Loyalty Error Enroll');
            break;
        //can't send a new code
        case (error.indexOf('can\'t send a new code') > -1):
            fireError('new code fail gen', 'Loyalty Error Enroll');
            break;
    }
}