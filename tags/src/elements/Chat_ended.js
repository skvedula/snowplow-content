export default function Chat_ended() {
    if (!window.nord_analytics_agentID) window.nord_analytics_agentID = '';
    cmCreateElementTag("New:+nordstrom.com - Queue " + window.nord_analytics_queueID + " - Agent " + window.nord_analytics_agentID, "Live Chat-Chat Session Ended");
    spCreateElementTag("New:+nordstrom.com - Queue " + window.nord_analytics_queueID + " - Agent " + window.nord_analytics_agentID, "Live Chat-Chat Session Ended");
}