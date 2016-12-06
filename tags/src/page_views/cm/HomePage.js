export default function HomePage() {
	var digitalData = {cart: { attributes: {} }, page: { attributes: {}, category: {}, pageInfo: { categoryString: null, destinationURL: null, keyword: null, MMdata: null, pageID: null, page_template: null } }, product: [], user: []};

	digitalData.user.push({
	  profile: []
	});
	digitalData.user[0].profile.push({
	  profileInfo: {}
	});

	(function() {
	  if ('analytics' in nord.config.settings) {
	    var analytics = nord.config.settings.analytics;

	    if ('pageTemplate' in analytics) digitalData.page.pageInfo.page_template = analytics.pageTemplate;    // Page Template
	    if ('pageId' in analytics) digitalData.page.pageInfo.pageID = analytics.pageId.replace(/\'/g, "")
	    if (/mstage1.shop/.test(window.location.hostname) || /mstage1.secure/.test(window.location.hostname) || /m.shop/.test(window.location.hostname) || /m.secure/.test(window.location.hostname)) digitalData.page.pageInfo.pageID += ' - MOW';   // Page ID
	    if ('categoryPath' in analytics) digitalData.page.category.categoryString = analytics.categoryPath;   // Category String
	  }
	  if ('shopper' in nord.config.settings) {
	    var shopper = nord.config.settings.shopper;
	    if ('id' in shopper) digitalData.user[0].profile[0].profileInfo.profileID = shopper.id;
	    if ('firstName' in shopper) digitalData.user[0].profile[0].profileInfo.userName = shopper.firstName;
	  }
	})();

	digitalData.page.pageInfo.destinationURL = window.location.href.replace(/'/g, '%27');   // Page URL

	digitalData.page.pageInfo.keyword = (window.location.href.indexOf("keyword") > 0 ? document.URL.split("keyword=")[1] : null);   // Keyword

	function domready() {
	  digitalData.user[0].profile[0].profileInfo.returningStatus = (('PageParameters' in window && document.getElementById('GlobalSignInLink') == null) || ('nord' in window && 'config' in window.nord && document.getElementById('shopper-status') && document.getElementById('shopper-status').getElementsByTagName('a')[0].text !== 'Sign In') ? 'Y' : 'N');
	  fireCM();
	}

	function fireCM() {
	    cmMakeTag(["tid", "1", "pi", digitalData.page.pageInfo.pageID, "cg", digitalData.page.category.categoryString, "se", digitalData.page.pageInfo.keyword, "sr", null, "pv1", null, "li", "3", "ps1", digitalData.page.pageInfo.pageID, "ps2", digitalData.page.pageInfo.page_template, "cmAttributes", '-_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_--_-' + digitalData.user[0].profile[0].profileInfo.returningStatus]);
	}
}