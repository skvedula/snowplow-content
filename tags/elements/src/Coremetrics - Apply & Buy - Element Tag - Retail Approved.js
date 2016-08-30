if($('#ICA_Confirmation_CardImage img').length > 0) { 
    if($('#ICA_Confirmation_CardImage img').attr('src').indexOf('Retail') > 0) {
	    window.clickstream.fire('element', ['cm','sp'], 'Accept Retail','Apply and Buy');
	}
}