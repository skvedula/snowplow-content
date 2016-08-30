try {
    window.clickstream.fire('element', ['cm','sp'], $('input[data-ng-model="giftOption"]:checked').next().text(), 'FAST AND EASY CHECKOUT');
}
catch(e) { console.log(e); }