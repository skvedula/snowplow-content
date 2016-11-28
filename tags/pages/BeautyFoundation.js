import BeautyFoundation_finder from '../src/elements/BeautyFoundation_finder';

document.querySelectorAll('#foundation-finder > div.finder-selections > div> div > a').forEach(function (el) {
  el.addEventListener('click', function() {
  	var cg = this.parentNode.parentNode.textContent;
  	categoryId = (/SKIN/.test(cg) ? 'Skin Type' : (/COVERAGE/.test(cg) ? 'Coverage' : (/FINISH/.test(cg) ? 'Finish' : 'error' )));
  	elementId = this.innerHTML.replace('<span class="dots"></span>', '');
	BeautyFoundation_finder(elementId, categoryId);
  }, false);
});