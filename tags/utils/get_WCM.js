export default function get_WCM() {
	var sp_uid, page_id, page_category, page_template, is_recognized, authenticated_state;
	if (window.nord && nord.config && nord.config.settings) {
		return (function() {
			sp_uid = (nord.config.settings.shopper && nord.config.settings.shopper.id ? nord.config.settings.shopper.id : '');
			page_id = (nord.config.settings.analytics && nord.config.settings.analytics.pageId ? nord.config.settings.analytics.pageId : document.title.replace(' | Nordstrom', ''));
			page_category = (nord.config.settings.analytics && nord.config.settings.analytics.categoryPath ? nord.config.settings.analytics.categoryPath : null);
			page_template = 'WCM';
			is_recognized = (nord.config.settings.shopper && nord.config.settings.shopper.firstName && nord.config.settings.shopper.firstName !== '' ? 'Y' : 'N');
			authenticated_state = (nord.config.settings.shopper && nord.config.settings.shopper.isLoggedIn ? 'Y' : 'N');
		})();
	}
	else return false;
}