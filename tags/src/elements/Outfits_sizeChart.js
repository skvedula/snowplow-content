import spCreateElementTag from '../../libs/spCreateElementTag';

export default function Outfits_sizeChart(payload, attrs) {
	if (payload.action === window.nord.core.actions.ProductSizeChartShow) {
		cmCreateElementTag('Size Chart', 'Outfit Page', attrs);
		spCreateElementTag('Size Chart', 'Outfit Page', attrs);
	}
}