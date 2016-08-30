if($('#ICA_Confirmation_CardImage img').length > 0) { 
    if($('#ICA_Confirmation_CardImage img').attr('src').indexOf('Visa') > 0) {
        window.clickstream.fire('element', ['cm','sp'], 'Accept Visa','Apply and Buy');   
    }
}