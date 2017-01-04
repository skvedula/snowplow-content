export default function CreditCardConfirmation_creditHardDeclineApplyDebit() {
	if(localStorage.getItem('cardType') === 'credit') {
        cmCreateElementTag('Apply Button - Debit','Apply and Buy');
        spCreateElementTag('Apply Button - Debit','Apply and Buy');
        localStorage.setItem('cardType', 'debit');
    }
}