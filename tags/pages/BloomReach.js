import BloomReach from '../src/page_views/cm/BloomReach';

document.addEventListener('cmloaded', function() { BloomReach(document.title.split(' |')[0]); }, false);