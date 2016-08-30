    $(document).on('mouseup', '#ICA_Confirmation_Para > a', function() {
        window.clickstream.fire('element', ['cm','sp'], 'Sign In Wait For Card','Apply and Buy');
    });