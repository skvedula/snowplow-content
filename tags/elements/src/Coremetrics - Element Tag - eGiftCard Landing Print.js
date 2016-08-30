$('#btn-print').on('click', function() {
	window.clickstream.fire('element', ['cm','sp'], 'Print Land', 'Gift Card');
});