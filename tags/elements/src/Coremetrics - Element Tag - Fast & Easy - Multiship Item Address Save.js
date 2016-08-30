try {
    if ($('.js-shippping-select:visible').length > 0) window.clickstream.fire('element', ['cm','sp'], 'Edit Address Save', 'FAST AND EASY CHECKOUT');
	else window.clickstream.fire('element', ['cm','sp'], 'Add New Address Save', 'FAST AND EASY CHECKOUT');
}
catch(e) { console.log(e); }