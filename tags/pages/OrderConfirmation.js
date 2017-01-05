import { spInit } from '../libs/init';

import spCreateElementTag from '../libs/spCreateElementTag';
import spCreateConversionEventTag from '../libs/spCreateConversionEventTag';
import spLogError from '../libs/spLogError';

import OrderConfirmation_pageView from "../src/page_views/OrderConfirmation_pageView";

import Loyalty_thankYou from '../src/elements/Loyalty_thankYou';
import order from '../src/orders/order';

window.spCreateElementTag = spCreateElementTag;
window.spCreateConversionEventTag = spCreateConversionEventTag;
window.spLogError = spLogError;

var tag_id = '4564350';

spInit();
OrderConfirmation_pageView(tag_id);
order(tag_id);
if(/loyaltymsg/.test(window.location.href)) Loyalty_thankYou();