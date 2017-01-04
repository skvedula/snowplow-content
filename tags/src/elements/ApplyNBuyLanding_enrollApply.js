export default function ApplyNBuyLanding_enrollApply() {
	if(bt_cookie('non-tender')) {
        var event = bt_cookie('non-tender');
        var element = event.split('|')[0];
        var category = event.split('|')[1];
        cmCreateElementTag(element, category);
        spCreateElementTag(element, category);
        //console.log('element: '+element + ' category: '+category);
        document.cookie = 'non-tender=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
     }
 }