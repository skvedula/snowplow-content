export default function Results_interactiveHeader(type) {
	var filterGroups = {
        '60187684-60187689': function() {
            return 'Stroller Type - standard';
        },
        '60187684-60187690': function() {
            return 'Stroller Type - umbrella';
        },
        '60187684-60187686': function() {
            return 'Stroller Type - double';
        },
        '60187684-60187687': function() {
            return 'Stroller Type - jogging';
        },
        "60131056-60183770": function() {
            return 'Men\'s Suits - classic fit';
        },
        "60131056-60132876": function() {
            return 'Men\'s Suits - trim fit';
        },
        "60131056-60132875": function() {
            return 'Men\'s Suits - extra trim fit';
        },
        "60131056-60197429": function() {
            return 'mens jeans skinny';
        },
        "60131056-60197430": function() {
            return 'mens jeans slim';
        },
        "60131056-60197431": function() {
            return 'mens jeans slim straight';
        },
        "60131056-60197432": function() {
            return 'mens jeans straight';
        },
        "60131056-60197427": function() {
            return 'mens jeans bootcut';
        },
        "60131056-60197428": function() {
            return 'mens jeans relaxed';
        }
    };

	cmCreateElementTag(filterGroups[type](), 'Interactive Header');
	spCreateElementTag(filterGroups[type](), 'Interactive Header');
}