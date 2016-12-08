import { spInit } from '../libs/init';

import spCreateElementTag from '../libs/spCreateElementTag';
import spCreateConversionEventTag from '../libs/spCreateConversionEventTag';
import spLogError from '../libs/spLogError';

import AllNordstrom_pageView from "../src/page_views/AllNordstrom_pageView";

window.spCreateElementTag = spCreateElementTag;
window.spCreateConversionEventTag = spCreateConversionEventTag;
window.spLogError = spLogError;

spInit();
AllNordstrom_pageView();