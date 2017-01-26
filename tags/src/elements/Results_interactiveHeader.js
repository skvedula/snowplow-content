export default function Results_interactiveHeader(data) {
    var type, filterLabel, optionLabel;
    if (data[0] && data[0].optionId && data[0].filterLabel) {
        type = data[0].optionId,
        filterLabel = data[0].filterLabel,
        optionLabel = data[0].optionLabel;
    }
    else return false;

    if (filterLabel === 'Stroller Type') {
        var strollerType = getFilterName(type);

        function getFilterName(type) {
            var filterName = {
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
                }
            };
            return filterName[type]();
        }
        cmCreateElementTag(strollerType, 'Interactive Header');
        spCreateElementTag(strollerType, 'Interactive Header');
    } else if (filterLabel == 'Fit' && window.location.href.indexOf('mens-suits') > -1) {
        var suitType = getFilterName(type);

        function getFilterName(type) {
            var filterName = {
                "60131056-60183770": function() {
                    return 'Men\'s Suits - classic fit';
                },
                "60131056-60132876": function() {
                    return 'Men\'s Suits - trim fit';
                },
                "60131056-60132875": function() {
                    return 'Men\'s Suits - extra trim fit';
                }
            };
            return filterName[type]();
        }
        cmCreateElementTag(suitType, 'Interactive Header');
        spCreateElementTag(suitType, 'Interactive Header');
    } else if (filterLabel == 'Fit' && window.location.href.indexOf('mens-jeans') > -1) {
        var jeanType = getFilterName(type);

        function getFilterName(type) {
            var filterName = {
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
            return filterName[type]();
        }
        cmCreateElementTag(jeanType, 'Interactive Header');
        spCreateElementTag(jeanType, 'Interactive Header');
    } else {
        if (data.length > 1) {
            var robj = data.map(function(obj) {
                cmCreateElementTag(obj.filterLabel + ' - ' + obj.optionLabel, 'Multi-Interactive Header');
            });
        } else {
           cmCreateElementTag(filterLabel + ' - ' + optionLabel, 'Interactive Header');
        }
    }
}