export default function Checkout_loyaltyClicksAndErrors(e, source, message) {
	function fireEvent(element, category) {
	    cmCreateElementTag(element, category);
	    spCreateElementTag(element, category);
	}

	console.log(source + ', ' + message);
    
    switch (true) {
    //Clicks
      case (message.indexOf("REWARDS_EDIT_PAYMENT") !=-1):
        fireEvent('Rewards Pay with Ncard Edit','Fast and Easy Checkout'); break;
      case (message.indexOf("REWARDS_EARN_POINTS") !=-1):
        fireEvent('Rewards Pay with Ncard Earn','Fast and Easy Checkout'); break;
      case (message.indexOf("REWARDS_NUMBER_SAVED") !=-1):
        fireEvent('Rewards Num Save Success','Fast and Easy Checkout'); break;
      case (message.indexOf("REWARDS_SKIPPED") !=-1):
        fireEvent('RewardsSkip Save Success','Fast and Easy Checkout'); break;
      case (message.indexOf("REWARDS_THANK_YOU") !=-1):
        fireEvent('Rewards Thanks Member','Fast and Easy Checkout'); break;
    //Errors    
      case (message.indexOf("REWARDS_ACCOUNT_NOT_FOUND") !=-1):
        fireEvent('mobile no account','Loyalty Error Earn'); break;
      case (message.indexOf("REWARDS_ACCOUNT_MOBILE_INVALID") !=-1):
        fireEvent('num invalid','Loyalty Error Earn'); break;
      case (message.indexOf("REWARDS_GENERAL_ERROR") !=-1):
        fireEvent('civs down','Loyalty Error Earn'); break;
      case (message.indexOf("REWARDS_ACCOUNT_ASSOCIATED") !=-1):
        fireEvent('mobile account exists','Loyalty Error Earn'); break;
      case (message.indexOf("REWARDS_DEBUT_CANADA") !=-1):
        fireEvent('canada debut','Loyalty Error Earn'); break;
      default:
        break;
     }
}