    if ('PageParameters' in window && 'ElementCategoryId' in PageParameters) {
        window.clickstream.fire('element', ['cm','sp'], "Pick up in Store",PageParameters.ElementCategoryId,"Pick up in Store");
    }