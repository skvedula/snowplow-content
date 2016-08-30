window.clickstream.fire('conversion', ['cm','sp'], "Debit Application", 1,"Apply & Buy");
(function(){
    $('body').on('click','#ApplyButton', function(){
        window.clickstream.fire('conversion', ['cm','sp'], "Debit Application", 2,"Apply & Buy");
        });
    })();
