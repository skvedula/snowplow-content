(function() {
  [].forEach.call(document.querySelectorAll('#main-content section.video-html5'), function(i) {
    var v = i.querySelector('video');
    v.addEventListener('play', function tag(){
      var data = JSON.parse(i.getAttribute('data-cm-tags'));
      window.clickstream.fire('link_click', ['cm','sp'], window.location.href + (window.location.search ? '&' : '?') + "cm_sp=" + data.manual_cm_sp + '&cm_re=' + data.manual_cm_re);
      v.removeEventListener('play', tag, false);
    }, false);
  });
})();