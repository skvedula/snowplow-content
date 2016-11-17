import ReviewSubmit_preview from '../src/conversions/ReviewSubmit_preview';
import ReviewSubmit_submit from '../src/conversions/ReviewSubmit_submit';

function ReviewSubmit_Tags() {
	document.querySelector('#BVButtonPreviewID').addEventListener('click', function() {
		ReviewSubmit_preview();
	});
	document.querySelector('#BVButtonSubmitID').addEventListener('click', function() {
		ReviewSubmit_submit();
	});
}