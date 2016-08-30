(function() {
    var months = {
        Jan: "01",
        Feb: "02",
        Mar: "03",
        Apr: "04",
        May: "05",
        Jun: "06",
        Jul: "07",
        Aug: "08",
        Sep: "09",
        Oct: "10",
        Nov: "11",
        Dec: "12"
    };
    $('#delivery_date_email_picker').on('change', function() {
        var dateParts = $(this).val().split(' ');
        var day = dateParts[0].length === 1 ? '0' + dateParts[0] : dateParts[0];
        var month = months[dateParts[1]];
        var year = dateParts[2];
        window.clickstream.fire('element', ['cm','sp'], year + month + day, 'Gift Card');
    });
})();
