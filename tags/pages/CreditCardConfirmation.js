import CreditCardConfirmation_acceptCredit2 from '../src/conversions/CreditCardConfirmation_acceptCredit2';
import CreditCardConfirmation_creditVisaApproved from '../src/conversions/CreditCardConfirmation_creditVisaApproved';
import CreditCardConfirmation_creditHardDeclineBackToShopping from '../src/conversions/CreditCardConfirmation_creditHardDeclineBackToShopping';
import CreditCardConfirmation_creditSoftDeclineCallNordstromBank from '../src/conversions/CreditCardConfirmation_creditSoftDeclineCallNordstromBank';
import CreditCardConfirmation_debitHardDeclineBackToShopping from '../src/conversions/CreditCardConfirmation_debitHardDeclineBackToShopping';
import CreditCardConfirmation_waitForCard from '../src/conversions/CreditCardConfirmation_waitForCard';
import CreditCardConfirmation_retailApproved from '../src/conversions/CreditCardConfirmation_retailApproved';

ApplyNBuy_acceptCredit();
CreditCardConfirmation_creditHardDeclineBackToShopping();
CreditCardConfirmation_debitHardDeclineBackToShopping();

if(document.querySelector('#ICA_Confirmation_CardImage img')) {
	var src = document.querySelector('#ICA_Confirmation_CardImage img').getAttribute('src');
	if (/Visa/.test(src) CreditCardConfirmation_visaApproved();
	else if (/Retail/.test(src)) CreditCardConfirmation_retailApproved();
}

document.querySelector('#ICA_Declined > div.link-list-wrapper.content > ul > li:nth-child(1) > a').addEventListener('click', CreditCardConfirmation_creditSoftDeclineCallNordstromBank);

document.querySelector('#ICA_Confirmation_Para > a').addEventListener('click', CreditCardConfirmation_waitForCard);