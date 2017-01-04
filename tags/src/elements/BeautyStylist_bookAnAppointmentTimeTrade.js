export default function BeautyStylist_bookAnAppointmentTimeTrade() {
	var category_alias = (function() {
		if (window.PageParameters != undefined && window.PageParameters != null) return window.PageParameters.categoryPathAlias;
		else if (window.nord.config.settings.analytics != undefined && window.nord.config.settings.analytics != null) return window.nord.config.settings.analytics.categoryPathAlias;
	})();

    cmCreateElementTag(category_alias + '|tt','BOOK AN APPOINTMENT - BEAUTY');
    spCreateElementTag(category_alias + '|tt','BOOK AN APPOINTMENT - BEAUTY');
}