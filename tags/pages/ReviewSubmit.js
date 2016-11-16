import spCreateElementTag from '../../libs/spCreateElementTag';
import spLogError from '../../libs/spLogError';

import ReviewSubmit_preview from '../src/conversions/ReviewSubmit_preview';
import ReviewSubmit_submit from '../src/conversions/ReviewSubmit_submit';

window.spCreateElementTag = spCreateElementTag;

function ReviewSubmit_Tags() {
	document.addEventListener('click', '#BVButtonPreviewID', function() {
		ReviewSubmit_preview();
	});
	document.addEventListener('click', '#BVButtonSubmitID', function() {
		ReviewSubmit_submit();
	});
}