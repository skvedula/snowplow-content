import eGiftCardPDP_link from '../src/elements/eGiftCardPDP_link';
import eGiftCardCheckout_edit from '../src/elements/eGiftCardCheckout_edit';
import eGiftCardCheckout_remove from '../src/elements/eGiftCardCheckout_remove';
import eGiftCardPDP_addAnother from '../src/elements/eGiftCardPDP_addAnother';
import eGiftCardPDP_checkOut from '../src/elements/eGiftCardPDP_checkOut';
import eGiftCardPDP_color from '../src/elements/eGiftCardPDP_color';
import eGiftCardPDP_date from '../src/elements/eGiftCardPDP_date';
import eGiftCardPDP_designCategory from '../src/elements/eGiftCardPDP_designCategory';
import eGiftCardPDP_value from '../src/elements/eGiftCardPDP_value';

import eGiftCardPDP from '../src/page_views/cm/eGiftCardPDP';

eGiftCardPDP();

document.querySelector('#cart-content > div > div.cart-item-actions > ul > li:nth-child(1) > a').addEventListener('click', eGiftCardCheckout_edit);

document.querySelector('#cart-content > div > div.cart-item-actions > ul > li:nth-child(2) > a').addEventListener('click', eGiftCardCheckout_remove);

document.querySelector('#order-add-another').addEventListener('click', eGiftCardPDP_addAnother);

document.querySelector('#order-check-out').addEventListener('click', eGiftCardPDP_checkOut);
document.querySelector('#cart-check-out').addEventListener('click', eGiftCardPDP_checkOut);

document.querySelector('span.image-container > img').addEventListener('click', function() {
	var color = this.getAttribute('data-pk');
	eGiftCardPDP_color(color);
});

document.querySelector('#delivery_date_email_picker').addEventListener('change', function() {
	var dateParts = this.value.split(' ');
    var day = dateParts[0].length === 1 ? '0' + dateParts[0] : dateParts[0];
    var month = months[dateParts[1]];
    var year = dateParts[2];
    eGiftCardPDP_date(day, month, year);
});

document.querySelector('#fp-nav > li > a').addEventListener('click', function() {
	var category = this.textContent;
	eGiftCardPDP_designCategory(category);
});

document.querySelector('#pre-select > li > a').addEventListener('click', function() {
	var value = this.getAttribute('data-value');
	eGiftCardPDP_value(value);
});

setTimeout(function() {
    if (window.location.pathname === '/nordstrom-gift-cards' || window.location.pathname === '/NordstromGiftCards.aspx') {
        document.querySelector('#ctl00_mainContentPlaceHolder_NgcMainPanel > div > div.egift-cards > p:nth-child(3) > a').addEventListener('click', function() {
            if (document.cookie.indexOf('gclink') === -1) document.cookie = encodeURIComponent('gclink') + "=; domain=nordstrom.com";
        });
    }

    if (window.location.pathname.indexOf('/c/e-gift-cards') !== -1 || window.location.pathname.indexOf('/gift-card/buy/') !== -1) {
//        console.log('on nordstrom e gift card page');
        if (document.cookie.indexOf('gclink') !== -1) {
//            console.log('has cookie');
            eGiftCardPDP_link();
//            console.log('created tag');
            document.cookie = encodeURIComponent('gclink') + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=nordstrom.com";
//            console.log('set cookie');
        }
    }
}, 1000);