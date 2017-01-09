import GiftCardPDP_link from '../src/elements/GiftCardPDP_link';
import GiftCardCheckout_edit from '../src/elements/GiftCardCheckout_edit';
import GiftCardCheckout_remove from '../src/elements/GiftCardCheckout_remove';
import GiftCardPDP_addAnother from '../src/elements/GiftCardPDP_addAnother';
import GiftCardPDP_checkOut from '../src/elements/GiftCardPDP_checkOut';
import GiftCardPDP_color from '../src/elements/GiftCardPDP_color';
import GiftCardPDP_date from '../src/elements/GiftCardPDP_date';
import GiftCardPDP_designCategory from '../src/elements/GiftCardPDP_designCategory';
import GiftCardPDP_value from '../src/elements/GiftCardPDP_value';

var type = '', color = '';

if (window.location.pathname === '/gift-card/buy/' || (/edit/.test(window.location.pathname) && /\gift-card\/buy\//.test(document.referrer))) type = 'e';

document.addEventListener('click', function(e) {
    if (e.target.parentNode.className === 'image-container' && e.target.nodeName === 'IMG') {
        color = e.target.getAttribute('data-pk');
        GiftCardPDP_color(color, type);
    }
    if (e.target.className === 'cart-action-edit') GiftCardCheckout_edit();
    if (e.target.className === 'cart-action-remove') GiftCardCheckout_remove();
    if (e.target.id === 'order-add-another') GiftCardPDP_addAnother();
    if (e.target.id === 'order-check-out' || e.target.id === 'cart-check-out') GiftCardPDP_checkOut();
    /*if (e.target.nodeName === 'TD' && e.target.className === 'day') {
        setTimeout(function() { 
            var datepicker = document.querySelector('input#delivery_date_email_picker');
            var months = {
                Jan: "01",
                Feb: "02",
                Mar: "03",
                Apr: "04",
                May: "05",
                Jun: "06",
                Jul: "07",
                Aug: "08",
                Sep: "09",
                Oct: "10",
                Nov: "11",
                Dec: "12"
            };
            var dateParts = datepicker.value.split(' ');
            var day = dateParts[0].length === 1 ? '0' + dateParts[0] : dateParts[0];
            var month = months[dateParts[1]];
            var year = dateParts[2];
            GiftCardPDP_date(day, month, year);
        }, 100);
    }*/
});

[].forEach.call(document.querySelectorAll('#fp-nav > li > a'), function(el) {
    el.addEventListener('click', function() {
    	var category = this.textContent;
    	GiftCardPDP_designCategory(category, type);
    });
});

[].forEach.call(document.querySelectorAll('#pre-select > li > a'), function(el) {
    el.addEventListener('click', function() {
    	var value = this.getAttribute('data-value');
    	GiftCardPDP_value(value, type);
    });
});