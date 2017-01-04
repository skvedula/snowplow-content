export default function parse_mkt_params() {
	var cleanurl = decodeURIComponent(window.location.search.replace('?', '') + window.location.hash).replace(/[?,#]/g, '&');

    var params = {}, sp_split,
        split_query = cleanurl.split('&');

    try {
        for (var query in split_query) {
            var key = split_query[query].split('=')[0].toLowerCase(),
            	val = split_query[query].split('=')[1];

            if (cleanurl.indexOf('cm_mmc') > -1 && key === 'cm_mmc') {
                var mmc_split = val.split('-_-');
                params.mkt_source = mmc_split[0];
                params.mkt_medium = mmc_split[1] || null;
                params.mkt_campaign = mmc_split[2] || null;
                params.mkt_term = mmc_split[3] || null;
            }
            else if ((key === 'cm_ven' || key === 'cm_cat' || key === 'cm_pla' || key === 'cm_ite') && cleanurl.indexOf('cm_mmc') == -1) {
                if (key === 'cm_ven') {
                    params.mkt_source = val;
                } if (key === 'cm_cat') {
                    params.mkt_medium = val;
                } if (key === 'cm_pla') {
                    params.mkt_campaign = val;
                } if (key === 'cm_ite') {
                    params.mkt_term = val;
                }
            }
            if (key === 'cm_re') {
                sp_split = val.split('-_-');
                params.real_estate_version = sp_split[0],
                params.real_estate_page_area = sp_split[1] || null,
                params.real_estate_link = sp_split[2] || null;
            }
            if (key === 'cm_sp') {
                sp_split = val.split('-_-');
                params.promotion_type = sp_split[0],
                params.promotion = sp_split[1] || null,
                params.promotion_link = sp_split[2] || null;
            }
            if (key === 'cm_em') {
                params.mkt_cm_em = val;
            } if (key === 'campaign') {
                params.mkt_cm_camp_name = val;
            } if (key === 'mcamp') {
                params.mkt_cm_camp_uid = val;
            } if (key === 'rkg_id') {
                params.mkt_rkg_id = val;
            } if (key === 'siteid') {
                params.mkt_linkshare_siteid = val;
            }
        }
    } catch(e) { 
    	get_errors(e);
    	return false; 
    }
    if (Object.getOwnPropertyNames(params).length) return params;
    else return false;
}