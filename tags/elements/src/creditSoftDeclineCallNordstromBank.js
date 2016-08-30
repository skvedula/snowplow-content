$(document).on('mouseup', '#ICA_Declined > div.link-list-wrapper.content > ul > li:nth-child(1) > a', function() {
    window.clickstream.fire('element', ['cm','sp'], 'Decline Call Rewards','Apply and Buy');
});