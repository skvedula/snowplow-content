import init from '../libs/init';

import Loyalty_thankYou from '../src/elements/Loyalty_thankYou';
import order from '../src/orders/order';

init();
order();
if(/loyaltymsg/.test(window.location.href)) Loyalty_thankYou();