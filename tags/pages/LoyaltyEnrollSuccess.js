import LoyaltyEnrollSuccess_bonusPoints from '../src/elements/LoyaltyEnrollSuccess_bonusPoints';
import LoyaltyEnrollSuccess_successClicks from '../src/elements/LoyaltyEnrollSuccess_successClicks';

var button;

document.querySelector('#loy-content .bonusPointsLink').addEventListener('click', function() {
	LoyaltyEnrollSuccess_bonusPoints();
});

document.querySelector('.nlogoimage').addEventListener('click', function() {
	button = 'Nordstrom';
	LoyaltyEnrollSuccess_successClicks(button);
});

document.querySelector('.racklogoimage').addEventListener('click', function() {
	button = 'Nordstrom Rack';
	LoyaltyEnrollSuccess_successClicks(button);
});

document.querySelector('.hautelogoimage').addEventListener('click', function() {
	button = 'Hautelook';
	LoyaltyEnrollSuccess_successClicks(button);
});