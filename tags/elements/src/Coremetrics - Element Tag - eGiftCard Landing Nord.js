$('#btn-go-to').on('click', function() {
	window.clickstream.fire('element', ['cm','sp'], 'Visit Nord Land', 'Gift Card');
});