export default function StoreLocator_storeSearchFilters(e) {
	var id;
    if (e.getAttribute('id') === 'all-stores') id = 'All';
    else if (e.getAttribute('id') === 'nordstrom-stores') id = 'FullLine';
    else if (e.getAttribute('id') === 'nordstrom-events') id = 'Nordstrom Events';
    else if (e.getAttribute('id') === 'nordstrom-rack-stores') id = 'Rack';
    cmCreateElementTag(id, 'STORE LOCATOR FILTER');
    spCreateElementTag(id, 'STORE LOCATOR FILTER');
} 