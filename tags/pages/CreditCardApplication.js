import CreditCardApplication_start from '../src/conversions/CreditCardApplication_start';
import CreditCardApplication_accordionBenefits from '../src/elements/CreditCardApplication_accordionBenefits';
import CreditCardApplication_saveContactFormError from '../src/elements/CreditCardApplication_saveContactFormError';
import CreditCardApplication_saveContactFormSuccess from '../src/elements/CreditCardApplication_saveContactFormSuccess';
import CreditCardApplication_savePersonalInfoError from '../src/elements/CreditCardApplication_savePersonalInfoError';
import CreditCardApplication_savePersonalInfoSuccess from '../src/elements/CreditCardApplication_savePersonalInfoSuccess';
import CreditCardApplication_termsCancel from '../src/elements/CreditCardApplication_termsCancel';
import NordstromCard_applyButton from '../src/elements/NordstromCard_applyButton';
import CreditCardApplication_setCreditLocalStorage from '../src/misc/CreditCardApplication_setCreditLocalStorage';

CreditCardApplication_start();
CreditCardApplication_setCreditLocalStorage();
NordstromCard_applyButton();

if(location.hostname.indexOf('m.secure') > -1) {
    document.querySelector('#apply-buy-app-header > nav > section > h3 > a').addEventListener('click', CreditCardApplication_accordionBenefits);
    document.querySelector('#-contact-form-save').addEventListener('click', function() {
    	setTimeout(function() {
            if (document.querySelector('#-contact-info-pane .error-pane.active')) {
                CreditCardApplication_saveContactFormError();
            }
            else CreditCardApplication_saveContactFormSuccess();
        }, 500);
    });
    document.querySelector('#-secure-info-form-save').addEventListener('click', function() {
    	setTimeout(function() {
            if (document.querySelector('#-secure-info-pane .error-pane.active')) {
                CreditCardApplication_savePersonalInfoError();
            }
            else CreditCardApplication_savePersonalInfoSuccess();
        }, 500);
    });
    document.querySelector('#CancelButton').addEventListener('click', CreditCardApplication_termsCancel);
}