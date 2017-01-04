import { didntGetACode, confirm, getANewCode } from '../src/elements/LoyaltyEnrollVerification_clicks';
import LoyaltyEnrollVerification_errors from '../src/elements/LoyaltyEnrollVerification_errors';

var button, auth;

if('opt' in window && 'PCs' in opt && 'auth' in opt.PCs) {
    if (opt.PCs.auth === 'LI') auth = 'Auth';
    else if (opt.PCs.auth === 'RC') auth = 'Recognized';
    else if (opt.PCs.auth === 'AN') auth = 'Unrecognized';

    document.querySelector('#ctl00_mainContentPlaceHolder_ResourceLabel1').addEventListener('click', function(auth) {
        didntGetACode(auth);
    });

    document.querySelector('#ctl00_mainContentPlaceHolder_btnVerify').addEventListener('click', function(auth) {
        confirm(auth);
    });

    document.querySelector('#ctl00_mainContentPlaceHolder_lnkGetNewCode').addEventListener('click', function(auth) {
        getANewCode(auth);
    });
}

document.addEventListener('RewardsError', function(e) { LoyaltyEnrollVerification_errors(e); });