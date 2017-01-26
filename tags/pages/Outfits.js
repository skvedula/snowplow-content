import Outfits from '../src/elements/Outfits';

(function Outfits_Tags() {
	window.nord.core.dispatcher.register(function (payload, runAsTask) {
		if (runAsTask) return false;
		Outfits(payload);
	});
})();