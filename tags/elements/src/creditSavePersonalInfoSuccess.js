$(document).on('mouseup', '#-secure-info-form-save', function() {
    setTimeout(function() {
        if($('#-secure-info-pane .error-pane.active').length === 0) {
            window.clickstream.fire('element', ['cm','sp'], 'Personal Save Success CreditApp','Apply and Buy');
        }
    }, 500);
});