import MyAccount_beautyBoard from '../src/elements/MyAccount_beautyBoard';
import MyAccount_Rewards_Manage from '../src/elements/MyAccount_Rewards_Manage';
import MyAccount_Rewards_Chat from '../src/elements/MyAccount_Rewards_Chat';
import MyAccount_Rewards_faq from '../src/elements/MyAccount_Rewards_faq';
import MyAccount_Rewards_TandC from '../src/elements/MyAccount_Rewards_TandC';
import MyAccount_Rewards_join from '../src/elements/MyAccount_Rewards_join';
import MyAccount_Rewards_paymentMethods from '../src/elements/MyAccount_Rewards_paymentMethods';
import MyAccount_Rewards_pointsAndBenefits from '../src/elements/MyAccount_Rewards_pointsAndBenefits';
import MyAccount_Rewards_apply from '../src/elements/MyAccount_Rewards_apply';
import MyAccount_Rewards_manageCard from '../src/elements/MyAccount_Rewards_manageCard';
import MyAccount_Rewards_bonusPointsEventsDates from '../src/elements/MyAccount_Rewards_bonusPointsEventsDates';
import MyAccount_Rewards_notesBenefits from '../src/elements/MyAccount_Rewards_notesBenefits';

function MyAccount_BeautyBoard_Tags() {
	try {
		document.querySelector('#ctl00_mainContentPlaceHolder_leftMenu_BeautyBoardLink').document.querySelectorListener('click', function() {
			MyAccount_beautyBoard();
		});

		//Non-Tender Loyalty - Manage Clicks

		//Nordstrom Rewards
		document.querySelector('#rewards-dashboard > div > section > p > a:nth-child(1)').addEventListener('click', function() {
			MyAccount_Rewards_Manage();
		});

		//Live Chat
		document.querySelector('#rewards-dashboard > div > section > p > span > a').addEventListener('click', function() {
			MyAccount_Rewards_Chat();
		});

		//Frequently Asked Questions
		document.querySelector('#rewards-dashboard > div > section > p > a:nth-child(3)').addEventListener('click', function() {
			MyAccount_Rewards_faq();
		});

		//Terms & Conditions
		document.querySelector('#rewards-dashboard > div > section > p > a:nth-child(6)').addEventListener('click', function() {
			MyAccount_Rewards_TandC();
		});

		/**
		No Rewards
		**/
		//Join Nordsrom Rewards
		document.querySelector('#non-tender > section > p > a').addEventListener('click', function() {
			MyAccount_Rewards_join();
		});

		//Payment Methods
		document.querySelector('#save-card > section > p > a').addEventListener('click', function() {
			MyAccount_Rewards_paymentMethods();
		});

		/**
		Only Rewards
		**/
		//You'll Earn 2 points
		document.querySelector('#earn-faster > section > p:nth-child(2) > a').addEventListener('click', function() {
			MyAccount_Rewards_pointsAndBenefits();
		});

		//Apply for a Nordstrom Card
		document.querySelector('#earn-faster > section > p.rd-applylink > a').addEventListener('click', function() {
			MyAccount_Rewards_apply();
		});

		/**
		Nord Card & Rewards
		**/
		//Manage credit/debit
		document.querySelector('#rd-pay-bill > p > a').addEventListener('click', function() {
			MyAccount_Rewards_manageCard();
		});

		//Get dates and more details
		document.querySelector('#rd-bonus-point-events > p > a').addEventListener('click', function() {
			MyAccount_Rewards_bonusPointsEventsDates();
		});

		//your notes and benefits questionmark
		document.querySelector('#rd-tender > section > section.rd-benefits > h4 > img').addEventListener('mouseover', function() {
			MyAccount_Rewards_notesBenefits();
		});
	} catch(e) {
		spLogError(e);
	}
}
MyAccount_BeautyBoard_Tags();