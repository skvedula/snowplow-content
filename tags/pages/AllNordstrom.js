import { spInit, cmInit } from '../libs/init';

import spCreateElementTag from '../libs/spCreateElementTag';
import spCreateConversionEventTag from '../libs/spCreateConversionEventTag';
import spLogError from '../libs/spLogError';

import AllNordstrom_pageView from "../src/page_views/AllNordstrom_pageView";

import BeautyBoard from '../src/page_views/cm/BeautyBoard';
import Blogs from '../src/page_views/cm/Blogs';
import BloomReach from '../src/page_views/cm/BloomReach';
import Careers from '../src/page_views/cm/Careers';
import Checkout from '../src/page_views/cm/Checkout';
import Content_Category from '../src/page_views/cm/Content_Category';
import GiftCardCheckout from '../src/page_views/cm/GiftCardCheckout';
import GiftCardHub from '../src/page_views/cm/GiftCardHub';
import GiftCardLanding from '../src/page_views/cm/GiftCardLanding';
import GiftCardPDP from '../src/page_views/cm/GiftCardPDP';
import GiftCardPlastic from '../src/page_views/cm/GiftCardPlastic';
import HomePage from '../src/page_views/cm/HomePage';
import MyAccount from '../src/page_views/cm/MyAccount';
import OrderLookup from '../src/page_views/cm/OrderLookup';
import OrderStatus from '../src/page_views/cm/OrderStatus';
import Outfits from '../src/page_views/cm/Outfits';
import Product from '../src/page_views/cm/Product';
import Samples from '../src/page_views/cm/Samples';
import Search from '../src/page_views/cm/Search';
import ShoppingBag from '../src/page_views/cm/ShoppingBag';
import SignIn from '../src/page_views/cm/SignIn';
import StoreDetail from '../src/page_views/cm/StoreDetail';
import WishList from '../src/page_views/cm/WishList';
import WishListRegistration from '../src/page_views/cm/WishListRegistration';
import WishListSearch from '../src/page_views/cm/WishListSearch';

window.spCreateElementTag = spCreateElementTag;
window.spCreateConversionEventTag = spCreateConversionEventTag;
window.spLogError = spLogError;

spInit();
AllNordstrom_pageView();

cmInit();
if (/^\/beautyboard/.test(window.location.pathname.toLowerCase())) BeautyBoard();
else if (/^blogs/.test(window.location.hostname.toLowerCase())) Blogs();
else if (/^\/th/.test(window.location.pathname.toLowerCase())) BloomReach();
else if (/about.nordstrom.com\/careers/.test(window.location.href.toLowerCase())) Careers();
else if (window.location.pathname.toLowerCase() === '/os') Checkout();
else if (/^\/c\//.test(window.location.pathname.toLowerCase())) Content_Category();
else if (window.location.href.toLowerCase() === 'https://shop.giftcard.nordstrom.com/gift-card/payment/') GiftCardCheckout();
else if (window.location.href.toLowerCase() === 'https://secure.nordstrom.com/nordstrom-gift-cards' || window.location.href.toLowerCase() === 'https://secure.nordstrom.com/nordstromgiftcards.aspx') GiftCardHub();
else if (/https:\/\/shop.giftcard.nordstrom.com\/redemption/.test(window.location.href.toLowerCase())) GiftCardLanding();
else if (window.location.href.toLowerCase() === 'https://shop.giftcard.nordstrom.com' || 
		 /https:\/\/shop.giftcard.nordstrom.com\/?/.test(window.location.href.toLowerCase()) ||
		 window.location.href.toLowerCase() === 'https://shop.giftcard.nordstrom.com/gift-card/buy/' ||
		 /https:\/\/shop.giftcard.nordstrom.com\/gift-card\/buy\/?/.test(window.location.href.toLowerCase())) GiftCardPDP();
else if (window.location.href.toLowerCase() === 'https://shop.giftcard.nordstrom.com/gift-card/plastic/') GiftCardPlastic();
else if (window.location.pathname === '/') HomePage();
else if (/secure.nordstrom.com\/myaccount\/accountsummary.aspx/.test(window.location.href.toLowerCase())) MyAccount();
else if (/secure.nordstrom.com\/orderlookupstatus.aspx/.test(window.location.href.toLowerCase())) OrderLookup();
else if (/secure.nordstrom.com\/myaccount\/orderstatus.aspx/.test(window.location.href.toLowerCase())) OrderStatus();
else if (/^\/o\//.test(window.location.pathname.toLowerCase())) Outfits();
else if (/^\/s\//.test(window.location.pathname.toLowerCase())) Product();
else if (window.location.pathname.toLowerCase() === '/choose-three-free-samples') Samples();
else if (window.location.pathname.toLowerCase() === '/sr') Search();
else if (window.location.pathname.toLowerCase() === '/shoppingbag.aspx') ShoppingBag();
else if (window.location.pathname.toLowerCase() === '/signin.aspx') SignIn();
else if (/shop.nordstrom.com\/st\//.test(window.location.href.toLowerCase())) StoreDetail();
else if (window.location.pathname.toLowerCase() === '/wishlist.aspx') WishList();
else if (window.location.pathname.toLowerCase() === '/wishlistregistration.aspx') WishListRegistration();
else if (window.location.pathname.toLowerCase() === '/wishlistsearchresults.aspx') WishListSearch(); 