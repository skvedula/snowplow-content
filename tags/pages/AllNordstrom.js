import spCreateElementTag from '../libs/spCreateElementTag';
import spLogError from '../libs/spLogError';

import AllNordstrom_pageView from "../src/page_views/AllNordstrom_pageView";

window.spCreateElementTag = spCreateElementTag;
window.spCreateConversionEventTag = spCreateElementTag;

AllNordstrom_pageView();