import MyAccount_leftNav from '../src/page_views/MyAccount_leftNav';
import MyAccount_beautyBoard from '../src/elements/MyAccount_beautyBoard';
import MyAccount_Rewards_manage from '../src/elements/MyAccount_Rewards_manage';
import MyAccount_Rewards_chat from '../src/elements/MyAccount_Rewards_chat';
import MyAccount_Rewards_faq from '../src/elements/MyAccount_Rewards_faq';
import MyAccount_Rewards_TandC from '../src/elements/MyAccount_Rewards_TandC';
import MyAccount_Rewards_join from '../src/elements/MyAccount_Rewards_join';
import MyAccount_Rewards_paymentMethods from '../src/elements/MyAccount_Rewards_paymentMethods';
import MyAccount_Rewards_pointsAndBenefits from '../src/elements/MyAccount_Rewards_pointsAndBenefits';
import MyAccount_Rewards_apply from '../src/elements/MyAccount_Rewards_apply';
import MyAccount_Rewards_manageCard from '../src/elements/MyAccount_Rewards_manageCard';
import MyAccount_Rewards_bonusPointsEventsDates from '../src/elements/MyAccount_Rewards_bonusPointsEventsDates';
// import MyAccount_Rewards_notesBenefits from '../src/elements/MyAccount_Rewards_notesBenefits';

function MyAccount_Tags() {
    document.addEventListener('click', function(e) {
    	//Beauty Board
    	if (e.target.text == 'Your Beauty Board') {
    		MyAccount_beautyBoard();
    	}
        //Rewards Information
        if (e.target.getAttribute('id') == 'ctl00_mainContentPlaceHolder_leftMenu_LinkRewardsInformation') {
            setTimeout(function() {
                try {
                    //Nordstrom Rewards
                    document.querySelector('#rewards-dashboard > div > section > p > a:nth-child(1)').addEventListener('click', function() {
                        MyAccount_Rewards_manage();
                    });

                    //Live Chat
                    document.querySelector('#rewards-dashboard > div > section > p > span.liveHelpGeneral > a').addEventListener('click', function() {
                        MyAccount_Rewards_chat();
                    });

                    //Frequently Asked Questions
                    document.querySelector('#rewards-dashboard > div > section > p > a:nth-child(4)').addEventListener('click', function() {
                        MyAccount_Rewards_faq();
                    });

                    //Terms & Conditions
                    document.querySelector('#rewards-dashboard > div > section > p > a:nth-child(7)').addEventListener('click', function() {
                        MyAccount_Rewards_TandC();
                    });

                    /** No Rewards **/
                    //Join Nordsrom Rewards
                    document.querySelector('#non-tender > section > p > a').addEventListener('click', function() {
                        MyAccount_Rewards_join();
                    });

                    //Payment Methods
                    document.querySelector('#save-card > section > p > a').addEventListener('click', function() {
                        MyAccount_Rewards_paymentMethods();
                    });

                    /** Only Rewards **/
                    //You'll Earn 2 points
                    document.querySelector('#earn-faster > section > p:nth-child(2) > a').addEventListener('click', function() {
                        MyAccount_Rewards_pointsAndBenefits();
                    });

                    //Apply for a Nordstrom Card
                    document.querySelector('#earn-faster > section > p.rd-applylink > a').addEventListener('click', function() {
                        MyAccount_Rewards_apply();
                    });

                    /** Nord Card & Rewards **/
                    //Manage credit/debit
                    document.querySelector('#rd-pay-bill > p > a').addEventListener('click', function() {
                        MyAccount_Rewards_manageCard();
                    });

                    //Get dates and more details
                    document.querySelector('#rd-bonus-point-events > p > a').addEventListener('click', function() {
                        MyAccount_Rewards_bonusPointsEventsDates();
                    });
                } catch (e) { spLogError(e); }

            }, 2000);
        }
    });
}
MyAccount_Tags();
