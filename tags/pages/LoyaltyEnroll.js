import LoyaltyEnroll_joinButton from '../src/elements/LoyaltyEnroll_joinButton';
import LoyaltyEnroll_termsAndConditionsButton from '../src/elements/LoyaltyEnroll_termsAndConditionsButton';
import LoyaltyEnroll_setBonusPointsEventsCookie from '../src/misc/LoyaltyEnroll_setBonusPointsEventsCookie';
import LoyaltyEnroll_setApplyTodayCookie from '../src/misc/LoyaltyEnroll_setApplyTodayCookie';
import LoyaltyEnroll_forgotYourPasswordButton from '../src/elements/LoyaltyEnroll_forgotYourPasswordButton';
import LoyaltyEnroll_accordionBenefits from '../src/elements/LoyaltyEnroll_accordionBenefits';
import LoyaltyEnroll_errors from '../src/elements/LoyaltyEnroll_errors';

var auth = 'Unrecognized';
if (bt_cookie('authstatus') && bt_cookie('nordstrom').indexOf('firstname') > -1) auth = 'Auth';

document.querySelector('#btnSubmit').addEventListener('click', function() {
	LoyaltyEnroll_joinButton(auth);
});

document.querySelector('#ctl00_mainContentPlaceHolder_ResourceLabel6 > a').addEventListener('click', function() {
	LoyaltyEnroll_termsAndConditionsButton(auth);
});

document.querySelector('#ctl00_mainContentPlaceHolder_updatePanel > div > div > div.rightContent > ul > li:nth-child(3) > a').addEventListener('click', function() {
	LoyaltyEnroll_setBonusPointsEventsCookie(auth);
});

document.querySelector('#ctl00_mainContentPlaceHolder_updatePanel > div > div > div.rightContent > p:nth-child(5) > a').addEventListener('click', function() {
	LoyaltyEnroll_setApplyTodayCookie(auth);
});

if (auth = 'Unrecognized') {
	document.querySelector('#ctl00_mainContentPlaceHolder_PasswordForgot > a').addEventListener('click', function() {
		LoyaltyEnroll_forgotYourPasswordButton();
	});
}

document.querySelector('#ctl00_mainContentPlaceHolder_updatePanel > div > div > div.rightContent > div').addEventListener('click', function() {
	LoyaltyEnroll_accordionBenefits();
});

document.addEventListener('RewardsError', function(e) { LoyaltyEnroll_errors(e); });