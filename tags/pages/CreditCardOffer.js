import CreditCardOffer_creditApplication from '../src/conversions/CreditCardOffer_creditApplication';
import CreditCardConfirmation_offerCredit from '../src/conversions/CreditCardConfirmation_offerCredit';
import CreditCardConfirmation_creditCustomerDeclinesNordstromRetail from '../src/elements/CreditCardConfirmation_creditCustomerDeclinesNordstromRetail';
import CreditCardConfirmation_creditCustomerDeclinesBoth from '../src/elements/CreditCardConfirmation_creditCustomerDeclinesBoth';
import CreditCardConfirmation_creditHardDeclineApplyDebit from '../src/elements/CreditCardConfirmation_creditHardDeclineApplyDebit';
import { CreditCardOffer_setVisa, CreditCardOffer_setRetail } from '../src/misc/CreditCardOffer_setCreditType';

document.querySelector('#AcceptVisaButton').addEventListener('click', CreditCardOffer_setVisa);
document.querySelector('#AcceptRetailCard').addEventListener('click', CreditCardOffer_setVisa);
document.querySelector('#AcceptRetailOnlyCard').addEventListener('click', CreditCardOffer_setVisa);

CreditCardOffer_creditApplication();
CreditCardConfirmation_offerCredit();

document.querySelector('#ctl00_mainContentPlaceholder_DeclineThisProductLink').addEventListener('click', CreditCardConfirmation_creditCustomerDeclinesNordstromRetail);

document.querySelector('#ctl00_mainContentPlaceholder_DeclineBothProductsLink').addEventListener('click', CreditCardConfirmation_creditCustomerDeclinesBoth);

document.querySelector('#ICA_Declined > p:nth-child(7) > a').addEventListener('click', CreditCardConfirmation_creditHardDeclineApplyDebit);