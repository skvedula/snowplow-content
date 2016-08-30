
var categoryId, elementId, el = "#foundation-finder > div.finder-selections > div> div > a";

[].forEach.call(document.querySelectorAll(el), function (el) {
  el.addEventListener('click', function() {
  var cg = this.parentNode.parentNode.innerHTML;
  categoryId = /SKIN/.test(cg) ? 'Skin Type' : (/COVERAGE/.test(cg) ? 'Coverage' : (/FINISH/.test(cg) ? 'Finish' : 'error'));
  elementId = this.innerHTML.replace('<span class="dots"></span>', '');
	window.clickstream.fire('element', ['cm','sp'], categoryId, elementId);
  }, false);
});
