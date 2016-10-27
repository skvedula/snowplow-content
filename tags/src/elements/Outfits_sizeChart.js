import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_sizeChart() {
	if (payload.action === window.nord.core.actions.ProductSizeChartShow) {
		var attrArray=[];
		attrArray["17"] = digitalData.outfit.styleNumber;
		attrArray["43"] = payload.styleNumber;
		cmCreateElementTag('Size Chart', 'Outfit Page', attrArray.join('-_-'));
		spCreateElementTag('Size Chart', 'Outfit Page', attrArray.join('-_-'));
	}
}