window.onload = function() {
    if ($('#ICA_Offer_Header > h1').text() === "Almost Done...") {
        if ($('#ICA_Offer_VisaSignature').length === 1) {
            window.clickstream.fire('conversion', ['cm','sp'], 'Visa Offer', 1,'Apply and Buy');
        }
        if ($('#ICA_Offer_NordstromRetail').length === 1) {
            window.clickstream.fire('conversion', ['cm','sp'], 'Retail Offer', 1,'Apply and Buy');
            };
    }
    $('body').on('click', '#AcceptVisaButton', function(){
        window.localStorage.setItem('cardType','visa');
        });
    $('body').on('click', '#AcceptRetailButton', function(){
        window.localStorage.setItem('cardType','retail');
        });
};
