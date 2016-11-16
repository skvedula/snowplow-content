export default function WishList_addAddress(shopper_id) {
	var attrArray=[];
	attrArray[1] = shopper_id;   
	cmCreateConversionEventTag('Wish List Add Address','1','Wish List',null,attrArray.join('-_-'));
	spCreateConversionEventTag('Wish List Add Address','1','Wish List',null,attrArray.join('-_-'));
}