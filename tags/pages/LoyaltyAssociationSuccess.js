import LoyaltyAssociationSuccess_successClicks from '../src/elements/LoyaltyAssociationSuccess_successClicks';
import { didntGetACode, confirm, getANewCode } from '../src/elements/LoyaltyAssociationSuccess_associationClicks';

var button, auth;

document.querySelector('#pnlDefaultContent > div:nth-child(3) > ul > li:nth-child(2) > a').addEventListener('click', function() {
	button = 'bonus points events';
	LoyaltyAssociationSuccess_successClicks(button);
});

document.querySelector('.nlogoimage').addEventListener('click', function() {
	button = 'Nordstrom';
	LoyaltyAssociationSuccess_successClicks(button);
});

document.querySelector('.racklogoimage').addEventListener('click', function() {
	button = 'Nordstrom Rack';
	LoyaltyAssociationSuccess_successClicks(button);
});

document.querySelector('.hautelogoimage').addEventListener('click', function() {
	button = 'Hautelook';
	LoyaltyAssociationSuccess_successClicks(button);
});

if('mmcore' in window && 'PCs' in mmcore && 'auth' in mmcore.PCs) {
    if (mmcore.PCs.auth == 'LI') auth = 'Auth';
    else if (mmcore.PCs.auth == 'RC') auth = 'Recognized';
    else if (mmcore.PCs.auth == 'AN') auth = 'Unrecognized';

    document.querySelector('#modalForm > div.mainContent > div.didntGetACode > a').addEventListener('click', function(auth) {
    	didntGetACode(auth);
    });

    document.querySelector('#modalForm > div.mainContent > div.row > label > a').addEventListener('click', function(auth) {
    	confirm(auth);
    });

    document.querySelector('#modalForm > div.mainContent > div.row > label > div > a').addEventListener('click', function(auth) {
    	getANewCode(auth);
    });

    document.querySelector('#modalForm > div.mainContent > div.codeExpiredError.serverError.errorPanel.errorType-serverError > a').addEventListener('click', function(auth) {
    	getANewCode(auth);
    });
}