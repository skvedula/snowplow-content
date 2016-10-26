export default function spCreateElementTag(element_id, category, attrs) {
	try {
		var split = attrs.split('-_-');

		var element_data = {
			schema: 'iglu:com.nordstrom/element_attrs/jsonschema/1-0-0',
			data: {
				wish_list: split[0],
				video_name: split[1],
				video_product_name: split[2],
				fit_style_name: split[3],
				sku: split[6],
				number_of_recs: split[7],
				rec_strategy: split[8],
				filter_category: split[9],
				// filter_value: split[1], 	// ?
				video_state: split[12],
				video_timestamp: split[13],
				video_length: split[14],
				style_number: split[16],
				star_rating: split[17],
				reviews_size_select: split[18],
				reviews_age_select: split[19],
				reviews_sort_by: split[20],
				results_page: split[21],
				brand_name: split[22],
				number_of_images: split[23],
				number_of_videos: split[24],
				note_value: split[27],
				note_expire_date: split[28],
				applied_notes_total: split[29],
				available_notes_total: split[32],
				// gift_card_total: split[1], 	// ?
				gift_card_value: split[33],
				page_id: split[35],
				search_term: split[37],
				number_of_reviews: split[39],
				rms_sku: split[40],
				// web_style_id: split[1], 	// ?
				outfit_id: split[42],
				store_number: split[48]
			}
		};

		snowplow('trackUnstructEvent', element_data);
	}
	catch(e) {
		console.warn(e);
	}
}