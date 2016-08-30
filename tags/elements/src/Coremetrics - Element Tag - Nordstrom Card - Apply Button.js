(function(){
    if(/ProductSelectedForApplication=1/.test(location.search))
 window.clickstream.fire('element', ['cm','sp'], "Apply Button - Credit", "Apply & Buy");
else if(/ProductSelectedForApplication=2/.test(location.search)) 
 window.clickstream.fire('element', ['cm','sp'], "Apply Button - Debit", "Apply & Buy");
    })();