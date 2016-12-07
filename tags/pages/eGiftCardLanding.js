import eGiftCardLanding_landingNord from '../src/elements/eGiftCardLanding_landingNord';
import eGiftCardLanding_landingPrint from '../src/elements/eGiftCardLanding_landingPrint';

import eGiftCardLanding from '../src/page_views/cm/eGiftCardLanding';

document.addEventListener('cmloaded', eGiftCardLanding, false);

document.querySelector('#btn-go-to').addEventListener('click', eGiftCardLanding_landingNord);
document.querySelector('#btn-print').addEventListener('click', eGiftCardLanding_landingPrint);