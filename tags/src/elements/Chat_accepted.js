export default function Chat_entry(e) {
    window.nord_analytics_queueID = '';
    window.nord_analytics_agentID = '';
    
    var pname = document.referrer.split('/');
    if (pname.length > 0) window.nord_analytics_queueID = pname[pname.length-1];
    
    window.nord_analytics_agentID = e.detail;
    cmCreateElementTag("New:+nordstrom.com - Queue " + window.nord_analytics_queueID + " - Agent " + window.nord_analytics_agentID, "Live Chat-Invite Accepted");
    spCreateElementTag("New:+nordstrom.com - Queue " + window.nord_analytics_queueID + " - Agent " + window.nord_analytics_agentID, "Live Chat-Invite Accepted");
}