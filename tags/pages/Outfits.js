import spCreateElementTag from '../libs/spCreateElementTag';
import Outfits from '../src/elements/Outfits';

window.spCreateElementTag = spCreateElementTag;

(function Outfits_Tags() {
	window.nord.core.dispatcher.register(function (payload) {
		Outfits(payload);
	});
})();