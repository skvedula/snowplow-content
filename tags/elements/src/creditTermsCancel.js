$(document).on('mouseup', '#CancelButton', function() {
    window.clickstream.fire('element', ['cm','sp'], 'Credit Terms Cancel','Apply and Buy');
});