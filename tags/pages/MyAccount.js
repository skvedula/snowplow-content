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
        //Left Nav
        if (e.target.className === 'menu_list') MyAccount_leftNav(e.target.textContent);
    	//Beauty Board
    	if (e.target.text == 'Your Beauty Board') MyAccount_beautyBoard();
        //Rewards Information
        /* All */
        if(e.target.text == "Nordstrom Rewards benefits") MyAccount_Rewards_manage();
        if(e.target.text == "chat") MyAccount_Rewards_chat();
        if(e.target.text == "Frequently Asked Questions") MyAccount_Rewards_faq();
        if(e.target.text == "Nordstrom Rewards Terms & Conditions") MyAccount_Rewards_TandC();
        /* No Rewards */
        if(e.target.text == "Join Nordstrom Rewards") MyAccount_Rewards_join();
        if(e.target.text == "Payment Methods") MyAccount_Rewards_paymentMethods();
        /* Only Rewards */
        if(e.target.text == "you'll earn 2 points per dollar and enjoy exclusive benefits") MyAccount_Rewards_pointsAndBenefits();
        if(e.target.text == "Apply for a Nordstrom card") MyAccount_Rewards_apply();
        /* Nord Card & Rewards */
        if(e.target.text == "Manage your Nordstrom credit or debit card") MyAccount_Rewards_manageCard();
        if(e.target.text == "Get dates and more details") MyAccount_Rewards_bonusPointsEventsDates();
    });
}
MyAccount_Tags();
