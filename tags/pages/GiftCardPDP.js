import GiftCardPDP_link from '../src/elements/GiftCardPDP_link';
import GiftCardCheckout_edit from '../src/elements/GiftCardCheckout_edit';
import GiftCardCheckout_remove from '../src/elements/GiftCardCheckout_remove';
import GiftCardPDP_addAnother from '../src/elements/GiftCardPDP_addAnother';
import GiftCardPDP_checkOut from '../src/elements/GiftCardPDP_checkOut';
import GiftCardPDP_color from '../src/elements/GiftCardPDP_color';
import GiftCardPDP_date from '../src/elements/GiftCardPDP_date';
import GiftCardPDP_designCategory from '../src/elements/GiftCardPDP_designCategory';
import GiftCardPDP_value from '../src/elements/GiftCardPDP_value';

document.querySelector('#cart-content > div > div.cart-item-actions > ul > li:nth-child(1) > a').addEventListener('click', GiftCardCheckout_edit);

document.querySelector('#cart-content > div > div.cart-item-actions > ul > li:nth-child(2) > a').addEventListener('click', GiftCardCheckout_remove);

document.querySelector('#order-add-another').addEventListener('click', GiftCardPDP_addAnother);

document.querySelector('#order-check-out').addEventListener('click', GiftCardPDP_checkOut);
document.querySelector('#cart-check-out').addEventListener('click', GiftCardPDP_checkOut);

[].forEach.call(document.querySelectorAll('span.image-container > img'), function(el) {
    el.addEventListener('click', function() {
    	var color = this.getAttribute('data-pk');
    	GiftCardPDP_color(color);
    });
});

document.querySelector('#delivery_date_email_picker').addEventListener('change', function() {
	var dateParts = this.value.split(' ');
    var day = dateParts[0].length === 1 ? '0' + dateParts[0] : dateParts[0];
    var month = months[dateParts[1]];
    var year = dateParts[2];
    GiftCardPDP_date(day, month, year);
});

[].forEach.call(document.querySelectorAll('#fp-nav > li > a'), function(el) {
    el.addEventListener('click', function() {
    	var category = this.textContent;
    	GiftCardPDP_designCategory(category);
    });
});

[].forEach.call(document.querySelectorAll('#pre-select > li > a'), function(el) {
    el.addEventListener('click', function() {
    	var value = this.getAttribute('data-value');
    	GiftCardPDP_value(value);
    });
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
            GiftCardPDP_link();
//            console.log('created tag');
            document.cookie = encodeURIComponent('gclink') + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=nordstrom.com";
//            console.log('set cookie');
        }
    }
}, 1000);