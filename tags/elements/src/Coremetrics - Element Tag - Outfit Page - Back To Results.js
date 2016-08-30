//$("#backToResults").click(function() {
        var origin = getUrlParameter('origin');
        var elementId;
        switch (origin) {
            case "keywordsearch":
            case "predictivesearch":
            case "advancedsearch":
                elementId = "SEARCH";
                break;
            default:
                elementId = "CATEGORY";
                break;
        }
        window.clickstream.fire('element', ['cm','sp'], 'BACK TO ' + elementId + ' RESULTS', 'PRODUCT PAGE BACK TO RESULTS LINK');
    //});