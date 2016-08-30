(function() {
    var createAttributeString = function(attrArray, max) {
        var attrString = "";
        for (var i = 1; i <= max; i++) {
            if (typeof attrArray[i.toString()] == "boolean") attrString += attrArray[i.toString()].toString();
            else if (attrArray[i.toString()] !== "" && attrArray[i.toString()] !== undefined) attrString += attrArray[i.toString()];
            if (i != max) attrString += "-_-";
        }
        return attrString;
    };

    $(document).on('mouseup', 'span.image-container > img', function() {
        var attrArray = [];
        attrArray["17"] = 'eGiftCard';
        window.clickstream.fire('element', ['cm','sp'], 'Alt color ' + $(this).attr('data-pk'), 'eGiftCard', 'eGiftCard', null, null, 17);
    });
})();
