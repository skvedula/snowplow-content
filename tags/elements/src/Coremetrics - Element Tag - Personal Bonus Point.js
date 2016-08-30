function selectCard(){
    var label = $("#payment > form > div.payment-method.credit-card.ng-scope > div > div > aside > span").text().toLowerCase();
	var notDefault = $("#payment > form > div.payment-method.credit-card.ng-scope > div > div > aside > label > span").text().toLowerCase();

	if(label.indexOf("bonus") < 0 && notDefault.length > 0){
		(label.indexOf("triple") > -1) ? window.clickstream.fire('element', ['cm','sp'], 'Triple Non-Eligible Card Display', 'Checkout Bonus Points'): window.clickstream.fire('element', ['cm','sp'], '10 Non Eligible Card Display', 'Checkout Bonus Points');
	}
}

try{
	selectCard();

	window.refreshIntervalId = window.setInterval(function() {
		var todayMessage = $("#review-order > div > div.actions.info-panel.pbpd.ng-scope > h4").text().toLowerCase();
		var chbxMessage = $('#payment > form > div.payment-method.credit-card.ng-scope > div > div > aside > label > span').text().toLowerCase();
		if (chbxMessage.length>0){
			clearInterval(window.refreshIntervalId);
			(chbxMessage.indexOf('triple')>-1) ? window.clickstream.fire('element', ['cm','sp'], 'Triple Message Showed', 'Checkout Bonus Points') : window.clickstream.fire('element', ['cm','sp'], '10 Message Showed', 'Checkout Bonus Points');
		}
		if (todayMessage.length>0) {
			clearInterval(window.refreshIntervalId);
			(todayMessage.indexOf("triple") > -1) ? window.clickstream.fire('element', ['cm','sp'], 'Today Is 3', 'Checkout Bonus Points') : window.clickstream.fire('element', ['cm','sp'], 'Today Is 10', 'Checkout Bonus Points');
		}
	} ,300);

	$(document).on('mouseup', '#payment > form > div.payment-method.credit-card.ng-scope > div > div > aside > label > input', function() {
		var message = $("#payment > form > div.payment-method.credit-card.ng-scope > div > div > aside > label > span").text().toLowerCase();
		(message.indexOf("triple") > -1) ? window.clickstream.fire('element', ['cm','sp'], 'Triple Yes Checked ', 'Checkout Bonus Points'): window.clickstream.fire('element', ['cm','sp'], '10 Yes Checked ', 'Checkout Bonus Points');
	});

	$(document).on('mouseup','#payment > form > div.payment-contact > div.actions > input',function(){selectCard();});
}
catch(e) { console.log(e); }