export default function BabyStrollers_interactiveHeader(payload) {
	var tag_id = '4254785';
    var flexi = payload.payload[0].optionId;
    var strollerType = getFilterName(flexi);
    
    function getFilterName(flexi) {
        var filterName = {
            '60187684-60187689': function() {
                return 'standard';
            },
            '60187684-60187690': function() {
                return 'umbrella';
            },
            '60187684-60187686': function() {
                return 'double';
            },
            '60187684-60187687': function() {
                return 'jogging';
            }
        };
        return filterName[flexi]();
    }
    try {
        if (getFilterName(flexi)) {
			cmCreateElementTag(strollerType, 'Interactive Header'); 
			spCreateElementTag(strollerType, 'Interactive Header'); 
        }
    }
 	catch (e) { bt_log('tag id: ' + tag_id + ' and error is ' + e); }
}