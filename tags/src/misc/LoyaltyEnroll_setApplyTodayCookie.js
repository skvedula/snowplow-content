export default function LoyaltyEnroll_setApplyTodayCookie(auth) {
	document.cookie = 'non-tender=Apply today Button - ' + auth + '|Non-Tender Enroll;domain=.nordstrom.com;path=/;';
}