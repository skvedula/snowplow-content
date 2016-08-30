    $(document).on('mouseup', '#CancelButton', function() {
        window.clickstream.fire('element', ['cm','sp'], 'Debit Terms Cancel','Apply and Buy');
    });