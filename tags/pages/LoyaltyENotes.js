import LoyaltyENotes_storesLink from '../src/elements/LoyaltyENotes_storesLink';
import LoyaltyENotes_findOutMore from '../src/elements/LoyaltyENotes_findOutMore';
import LoyaltyENotes_termsAndConditions from '../src/elements/LoyaltyENotes_termsAndConditions';
import LoyaltyENotes_association from '../src/elements/LoyaltyENotes_association';

document.querySelector('#usdStoresLink').addEventListener('click', function() {
	LoyaltyENotes_storesLink();
});

document.querySelector('#cadStoresLink').addEventListener('click', function() {
	LoyaltyENotes_storesLink('CA');
});

document.querySelector('#usdFindOutMore').addEventListener('click', function() {
	LoyaltyENotes_findOutMore();
});

document.querySelector('#cadFindOutMore').addEventListener('click', function() {
	LoyaltyENotes_findOutMore('CA');
});

document.querySelector('#usdTermsAndConditions').addEventListener('click', function() {
	LoyaltyENotes_termsAndConditions();
});

document.querySelector('#cadTermsAndConditions').addEventListener('click', function() {
	LoyaltyENotes_termsAndConditions('CA');
});

document.querySelector('#usdAssociationLink').addEventListener('click', function() {
	LoyaltyENotes_association();
});