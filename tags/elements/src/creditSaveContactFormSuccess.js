$(document).on('mouseup', '#-contact-form-save', function() {
    setTimeout(function() {
        if($('#-contact-info-pane .error-pane.active').length === 0) {
            window.clickstream.fire('element', ['cm','sp'], 'Contact Save Success CreditApp','Apply and Buy');
        }
    }, 500);
});