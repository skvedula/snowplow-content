export default function Chat_entry() {
    var pname = window.location.pathname.split('/'), queue_id = '';
    if (pname.length > 0) queue_id = pname[pname.length-1];
    cmCreateElementTag("Customer Entry Form Loaded - Queue " + queue_id, "Live Chat");
    spCreateElementTag("Customer Entry Form Loaded - Queue " + queue_id, "Live Chat");
}