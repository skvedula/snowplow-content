import Outfits from '../src/elements/Outfits';

(function Outfits_Tags() {
	window.nord.core.dispatcher.register(function (payload) {
		Outfits(payload);
	});
})();