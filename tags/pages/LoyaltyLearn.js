import LoyaltyLearn_joinButton from '../src/elements/LoyaltyLearn_joinButton';
import LoyaltyLearn_becomeAMemberButton from '../src/elements/LoyaltyLearn_becomeAMemberButton';
import LoyaltyLearn_benefitsButton from '../src/elements/LoyaltyLearn_benefitsButton';
import LoyaltyLearn_anniversarySaleEAButton from '../src/elements/LoyaltyLearn_anniversarySaleEAButton';
import LoyaltyLearn_triplePointsDaysButton from '../src/elements/LoyaltyLearn_triplePointsDaysButton';
import LoyaltyLearn_alterationsButton from '../src/elements/LoyaltyLearn_alterationsButton';
import LoyaltyLearn_vipEventsButton from '../src/elements/LoyaltyLearn_vipEventsButton';
import LoyaltyLearn_applyNowButton from '../src/elements/LoyaltyLearn_applyNowButton';
import LoyaltyLearn_signInButton from '../src/elements/LoyaltyLearn_signInButton';
import LoyaltyLearn_learnMoreButton from '../src/elements/LoyaltyLearn_learnMoreButton';

document.querySelector('#loy-content > div > section > header > div > a, #loy-content > div > section > article.rewards-steps > div.step-content.join-step > a').addEventListener('click', LoyaltyLearn_joinButton);

document.querySelector('#loy-content > div > section > article.rewards-steps > div.step-content.join-step > div > p > a').addEventListener('click', LoyaltyLearn_becomeAMemberButton);

document.querySelector('#loy-content > div > section > article.rewards-earn-faster > div.earn-faster-column > p > a').addEventListener('click', LoyaltyLearn_benefitsButton);

document.querySelector('#loy-content > div > section > article.rewards-earn-faster > div.earn-faster-column > ul > li:nth-child(2) > a').addEventListener('click', LoyaltyLearn_anniversarySaleEAButton);

document.querySelector('#loy-content > div > section > article.rewards-earn-faster > div.earn-faster-column > ul > li:nth-child(3) > a').addEventListener('click', LoyaltyLearn_triplePointsDaysButton);

document.querySelector('#loy-content > div > section > article.rewards-earn-faster > div.earn-faster-column > ul > li:nth-child(4) > a').addEventListener('click', LoyaltyLearn_alterationsButton);

document.querySelector('#loy-content > div > section > article.rewards-earn-faster > div.earn-faster-column > ul > li:nth-child(5) > a').addEventListener('click', LoyaltyLearn_vipEventsButton);

document.querySelector('#loy-content > div > section > article.rewards-earn-faster > div.earn-faster-column > div.apply-button > a').addEventListener('click', LoyaltyLearn_applyNowButton);

document.querySelector('#loy-content > div > section > article.rewards-earn-faster > div.earn-faster-column > div.cardHolder > p.rewards-sign-in > a').addEventListener('click', LoyaltyLearn_signInButton);

document.querySelector('#loy-content > div > section > article.rewards-earn-faster > div.earn-faster-column > div.cardHolder > p:nth-child(3) > a').addEventListener('click', LoyaltyLearn_learnMoreButton);