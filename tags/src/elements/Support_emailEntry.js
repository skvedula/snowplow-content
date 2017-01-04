export default function Support_emailEntry() {
    var pname = window.location.pathname.split('/'), queue_id = '';
    if (pname.length > 0) queue_id = pname[pname.length-1];
    cmCreateElementTag("Customer Email Form Loaded - Queue " + queue_id, "Live Chat");
    spCreateElementTag("Customer Email Form Loaded - Queue " + queue_id, "Live Chat");
}