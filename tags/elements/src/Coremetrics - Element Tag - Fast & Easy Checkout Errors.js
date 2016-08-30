 
function BTgetErrors() {
    //console.log('BT listening for errors');
  $(document).on('UNKNOWN_ERROR', function(event, data) {
      //console.log(data);
    window.clickstream.fire('element', ['cm','sp'], data,'FAST AND EASY CHECKOUT');
  });
}
var jt = setInterval(function() {
  if (window.jQuery) {
    clearInterval(jt);
    BTgetErrors();
  }
}, 100);
setTimeout(function() {
    clearInterval(jt);
}, 5000);
 
