import Outfits from '../src/elements/Outfits';

import { Outfits as Outfits_Page } from '../src/page_views/cm/Outfits';

Outfits_Page();

(function Outfits_Tags() {
	window.nord.core.dispatcher.register(function (payload) {
		Outfits(payload);
	});
})();