import Careers_createProfile from '../src/elements/Careers_createProfile';
import Careers_fullNavLink from '../src/elements/Careers_fullNavLink';
import Careers_employees from '../src/elements/Careers_employees';
import Careers_responsiveNavOpened from '../src/elements/Careers_responsiveNavOpened';
import Careers_responsiveNavLink from '../src/elements/Careers_responsiveNavLink';
import Careers_searchJobs from '../src/elements/Careers_searchJobs';

function Careers_Tags() {
	try {
		document.querySelector('.profile a').addEventListener('click', function() {
			Careers_createProfile();
		});
		document.querySelector('ul.breadcrumbs a').addEventListener('click', function() {
			Careers_fullNavLink(this);
		});
		document.querySelector('.employees a').addEventListener('click', function() {
			Careers_employees();
		});
		document.querySelector('.menu-signal').addEventListener('click', function() {
			Careers_responsiveNavOpened();
		});
		document.querySelector('.slide a').addEventListener('click', function() {
			Careers_responsiveNavLink(this);
		});
		document.querySelector('.search a').addEventListener('click', function() {
			Careers_searchJobs();
		});
	} catch(e) {
		spLogError(e);
	}
}
Careers_Tags();