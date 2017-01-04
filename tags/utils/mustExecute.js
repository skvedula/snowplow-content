export default function mustExecute(func, numTrys, callback) {
	return function () {
		try {
			func();
		} catch (e) {
			if (numTrys === 0) {
				// getPage();
				if (callback) callback();
				return;
			}
			setTimeout(mustExecute(func, numTrys - 1, callback), 250);
		}
	};
}
// mustExecute(function(){}, 10)();