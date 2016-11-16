paths="s3://cxar-ato-bigdata/snowplow-dev/CA/elwin_exposures/ 
s3://cxar-ato-bigdata/snowplow-dev/CA/events/ 
s3://cxar-ato-bigdata/snowplow-dev/CA/link_clicks/ 
s3://cxar-ato-bigdata/snowplow-dev/CA/marketing/ 
s3://cxar-ato-bigdata/snowplow-dev/CA/nordstrom_add_item/ 
s3://cxar-ato-bigdata/snowplow-dev/CA/nordstrom_remove_item/ 
s3://cxar-ato-bigdata/snowplow-dev/CA/order_items/ 
s3://cxar-ato-bigdata/snowplow-dev/CA/page_views/ 
s3://cxar-ato-bigdata/snowplow-dev/CA/product_views/ 
s3://cxar-ato-bigdata/snowplow-dev/CA/real_estate/ 
s3://cxar-ato-bigdata/snowplow-dev/CA/search/ 
s3://cxar-ato-bigdata/snowplow-dev/CA/site_promos/ 
s3://cxar-ato-bigdata/snowplow-dev/CA/snowplow_add_to_cart/ 
s3://cxar-ato-bigdata/snowplow-dev/CA/snowplow_remove_from_cart/ 
s3://cxar-ato-bigdata/snowplow-dev/CA/timing/"

for i in $paths
do
	count=`aws s3 ls $i | wc -l`
	if [[ $count -gt 1 ]]; then
	        echo "$count files in $i; aborting"
	        exit 1
	else
	    echo "$i empty, proceeding"
	fi
done

exit 0