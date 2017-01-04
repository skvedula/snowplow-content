import DebitCardApplication_start from '../src/conversions/DebitCardApplication_start';
import DebitCardApplication_complete from '../src/conversions/DebitCardApplication_complete';
import DebitCardApplication_accordionBenefits from '../src/elements/DebitCardApplication_accordionBenefits';
import DebitCardApplication_saveContactFormError from '../src/elements/DebitCardApplication_saveContactFormError';
import DebitCardApplication_saveContactFormSuccess from '../src/elements/DebitCardApplication_saveContactFormSuccess';
import DebitCardApplication_savePersonalInfoError from '../src/elements/DebitCardApplication_savePersonalInfoError';
import DebitCardApplication_savePersonalInfoSuccess from '../src/elements/DebitCardApplication_savePersonalInfoSuccess';
import DebitCardApplication_termsCancel from '../src/elements/DebitCardApplication_termsCancel';
import NordstromCard_applyButton from '../src/elements/NordstromCard_applyButton';
import DebitCardApplication_setDebitLocalStorage from '../src/misc/DebitCardApplication_setDebitLocalStorage';

DebitCardApplication_start();
document.querySelector('#ApplyButton').addEventListener('click', DebitCardApplication_complete);
DebitCardApplication_setDebitLocalStorage(); // good
NordstromCard_applyButton();

document.querySelector('#apply-buy-app-header > nav > section > h3 > a').addEventListener('click', DebitCardApplication_accordionBenefits); // good

document.querySelector('#-contact-form-save').addEventListener('click', function() { // good
	setTimeout(function() {
        if (document.querySelector('#-contact-info-pane .error-pane.active')) {
            DebitCardApplication_saveContactFormError();
        }
        else DebitCardApplication_saveContactFormSuccess();
    }, 500);
});

document.querySelector('#-secure-info-form-save').addEventListener('click', function() { // good
	setTimeout(function() {
        if (document.querySelector('#-secure-info-pane .error-pane.active')) {
            DebitCardApplication_savePersonalInfoError();
        }
        else DebitCardApplication_savePersonalInfoSuccess();
    }, 500);
});

document.querySelector('#CancelButton').addEventListener('click', DebitCardApplication_termsCancel); // good