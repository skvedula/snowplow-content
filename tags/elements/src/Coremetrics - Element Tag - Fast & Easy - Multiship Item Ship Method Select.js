try {
    if ($('.js-shippping-select:visible').length > 0) window.clickstream.fire('element', ['cm','sp'], 'ShipMethod Modal: [[Fast & Easy Multiship Item Shipping Method]]', 'FAST AND EASY CHECKOUT');
}
catch(e) { console.log(e); }