export default function spCreateElementTag(element_id, category, attrs, pts) { 	// spCreateConversionEventTag(element_id, type, category, pts, attrs)
	try {
		var schema = 'iglu:com.nordstrom/element_attrs/jsonschema/1-0-0',
		split, 
		element_data,
		data = {},
		data2 = {}
		;

		if (attrs) {
			split = attrs.split('-_-') || null;

			if (split) {
				data = {
					category: category || null,
					action: element_id || null,
					value: (pts ? parseInt(pts, 10) : null),
					wish_list: split[0] || null,
					video_name: split[1] || null,

					video_product_name: split[2] || null,
					fit_style_name: split[3] || null,
					sku: split[6] || null,
					number_of_recs: split[7] || null,
					rec_strategy: split[8] || null,
					filter_category: split[9] || null,
					// filter_value: split[1], 	// ?
					video_state: split[12] || null,
					video_timestamp: split[13] || null,
					video_length: split[14] || null,
					style_number: split[16] || null,
					star_rating: split[17] || null,
					reviews_size_select: split[18] || null,
					reviews_age_select: split[19] || null,
					reviews_sort_by: split[20] || null,
					results_page: split[21] || null,
					brand_name: split[22] || null,
					number_of_images: split[23] || null,
					number_of_videos: split[24] || null,
					note_value: split[27] || null,
					note_expire_date: split[28] || null,
					applied_notes_total: split[29] || null,
					available_notes_total: split[32] || null,
					// gift_card_total: split[1], 	// ?
					gift_card_value: split[33] || null,
					page_id: split[35] || null,
					search_term: split[37] || null,
					number_of_reviews: split[39] || null,
					rms_sku: split[40] || null,
					// web_style_id: split[1], 	// ?
					outfit_id: split[42] || null,
					store_number: split[48] || null
				};

				for (var i in data) {
					// if (data[i]) console.log(data[i]);
					if (data[i]) data2[i] = data[i];
				}
				// console.log(data2);

				element_data = {
					schema: schema,
					data: data2
				};
				snowplow('trackUnstructEvent', element_data);
			}
		}
		else {
			element_data = {
				schema: schema,
				data: {
					category: category || null,
					action: element_id || null
				}
			};
			snowplow('trackUnstructEvent', element_data);
		}
	}
	catch(e) {
		console.warn(e);
	}
}