export default function CreditCardConfirmation_offerCredit() {
    (function offerCreditConversion() {
        var offerType;
        if (document.querySelector('#ICA_Offer_Header > h1') && document.querySelector('#ICA_Offer_Header > h1').textContent === "Almost Done...") {
            if (document.querySelector('#ICA_Offer_VisaSignature')) offerType = 'Visa';
            else if (document.querySelector('#ICA_Offer_NordstromRetail')) offerType = 'Retail';
        }
        if (offerType) {
            offerType += ' Offer';
            if (typeof cmCreateConversionEventTag === 'function') cmCreateConversionEventTag(offerType, 1, 'Apply and Buy');
            if (typeof spCreateConversionEventTag === 'function') spCreateConversionEventTag(offerType, 1, 'Apply and Buy');
            localStorage.removeItem('cardType');
        } else {  window.setTimeout(offerCreditConversion, 500); }

        document.querySelector('#AcceptVisaButton').addEventListener('click', function(){
            window.localStorage.setItem('cardType','visa');
        });
        document.querySelector('#AcceptRetailButton').addEventListener('click', function(){
            window.localStorage.setItem('cardType','retail');
        });
    })();
}