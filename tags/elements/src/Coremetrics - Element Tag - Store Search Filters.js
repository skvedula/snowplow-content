$(document).on('mouseup', '.store-event-nav input', function() {
    var id;
    if ($(this).attr('id') === 'all-stores') id = 'All';
    else if ($(this).attr('id') === 'nordstrom-stores') id = 'FullLine';
    else if ($(this).attr('id') === 'nordstrom-events') id = 'Nordstrom Events';
    else if ($(this).attr('id') === 'nordstrom-rack-stores') id = 'Rack';
    window.clickstream.fire('element', ['cm','sp'], id, 'STORE LOCATOR FILTER');
});