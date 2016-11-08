import spCreateElementTag from '../../libs/spCreateElementTag';
import spLogError from '../../libs/spLogError';

import Careers_createProfile from '../src/elements/Careers_createProfile';
import Careers_fullNavLink from '../src/elements/Careers_fullNavLink';
import Careers_employees from '../src/elements/Careers_employees';
import Careers_responsiveNavOpened from '../src/elements/Careers_responsiveNavOpened';
import Careers_responsiveNavLink from '../src/elements/Careers_responsiveNavLink';
import Careers_searchJobs from '../src/elements/Careers_searchJobs';

window.spCreateElementTag = spCreateElementTag;

function Careers_Tags() {
	try {
		document.addEventListener('click', '.profile a', function() {
			Careers_createProfile();
		});
		document.addEventListener('click', 'ul.breadcrumbs a', function() {
			Careers_fullNavLink(this);
		});
		document.addEventListener('click', '.employees a', function() {
			Careers_employees();
		});
		document.addEventListener('click', '.menu-signal', function() {
			Careers_responsiveNavOpened();
		});
		document.addEventListener('click', '.slide a', function() {
			Careers_responsiveNavLink(this);
		});
		document.addEventListener('click', '.search a', function() {
			Careers_searchJobs();
		});
	} catch(e) {
		spLogError(e);
	}
}
Careers_Tags();