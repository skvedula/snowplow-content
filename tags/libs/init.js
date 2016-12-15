export function cmInit() {

	var fireCM = function() {
	    if (typeof cmSetClientID == 'function') {
			if (typeof(cmSetupOther) == 'function') { cmSetupOther({"cm_TrackImpressions":""}); }
			else var cm_TrackImpressions ="";

			if(/^m/.test(window.location.hostname)) {	// mobile web
				if (/dev/.test(window.location.hostname) || /mstage1/.test(window.location.hostname)) cmSetClientID('60408482;81690000|81690004',false,'testdata.coremetrics.com','nordstrom.com');
				else cmSetClientID('90033273',false,'1901.nordstrom.com','nordstrom.com');
			}
			else {	// full site
				if (/dev/.test(window.location.hostname) || /staging-shop/.test(window.location.hostname)) cmSetClientID('60408482;81690000|81690001',false,'testdata.coremetrics.com','nordstrom.com');
				else cmSetClientID('90033273',false,'1901.nordstrom.com','nordstrom.com');
			}
			var event = new Event('cmloaded');
			document.dispatchEvent(event);
	    }
	    else setTimeout(fireCM, 50);
	};

	var s = document.createElement("script");
    s.src = "//libs.coremetrics.com/eluminate.js";
    s.onload = fireCM();
    document.head.appendChild(s);
}

export function spInit() {
	var prod = (['shop.nordstrom.com', 'secure.nordstrom.com', 'm.shop.nordstrom.com', 'm.secure.nordstrom.com', 'about.nordstrom.com', 'restaurants.nordstrom.com','shop.giftcard.nordstrom.com'].indexOf(window.location.hostname) > -1 ? 1 : 0),
		mobile = (/^m/.test(window.location.hostname) ? 1 : 0),
		env_vars = {
			collector: (prod ? 'p.nordstromdata.com' : 't.nordstromdata.com'),
			appId: (mobile ? 'nord.mow' : 'nord.com')
		}
	;

	(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
		p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments);
		};p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
		n.src=w;g.parentNode.insertBefore(n,g);}}(window,document,"script","https://images.nordstromdata.com/js/sp/2.6.2/sp.js","snowplow"));

	snowplow("newTracker", 'nord' + (prod ? '_prod' : '_dev'), env_vars.collector, 
		{
			appId: env_vars.appId,
			cookieDomain: ".nordstrom.com",
			cookieName: "_sp_",
			pageUnloadTimer: 0,
			useCookies: true,
			bufferSize: 5,
			encodeBase64: false,
			forceSecureTracker: true
		}
	);
}