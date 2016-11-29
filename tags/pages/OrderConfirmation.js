import Loyalty_thankYou from '../src/elements/Loyalty_thankYou';
import order from '../src/order/order';

order();

if(/loyaltymsg/.test(window.location.href)) Loyalty_thankYou();