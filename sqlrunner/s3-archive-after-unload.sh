DATE=`date +%m%d%Y_%H%M`

echo "Archiving elwin exposures..."
aws s3 mv s3://cxar-ato-bigdata/snowplow-dev/CA/elwin_exposures/ s3://cxar-ato-bigdata/snowplow-dev/CA/archive/elwin_exposures/$DATE/ --recursive
echo "elwin exposures archived, moving on to events..."
aws s3 mv s3://cxar-ato-bigdata/snowplow-dev/CA/events/ s3://cxar-ato-bigdata/snowplow-dev/CA/archive/events/$DATE/ --recursive
echo "events archived, moving on to link clicks..."
aws s3 mv s3://cxar-ato-bigdata/snowplow-dev/CA/link_clicks/ s3://cxar-ato-bigdata/snowplow-dev/CA/archive/link_clicks/$DATE/ --recursive
echo "link clicks archived, moving on to marketing..."
aws s3 mv s3://cxar-ato-bigdata/snowplow-dev/CA/marketing/ s3://cxar-ato-bigdata/snowplow-dev/CA/archive/marketing/$DATE/ --recursive
echo "marketing archived, moving on to nordstrom_add_item..."
aws s3 mv s3://cxar-ato-bigdata/snowplow-dev/CA/nordstrom_add_item/ s3://cxar-ato-bigdata/snowplow-dev/CA/archive/nordstrom_add_item/$DATE/ --recursive
echo "nordstrom add item archived, moving on to nordstrom_remove_item..."
aws s3 mv s3://cxar-ato-bigdata/snowplow-dev/CA/nordstrom_remove_item/ s3://cxar-ato-bigdata/snowplow-dev/CA/archive/nordstrom_remove_item/$DATE/ --recursive
echo "nordstrom remove item archived, moving on to order items..."
aws s3 mv s3://cxar-ato-bigdata/snowplow-dev/CA/order_items/ s3://cxar-ato-bigdata/snowplow-dev/CA/archive/order_items/$DATE/ --recursive
echo "order item archived, moving on to page views..."
aws s3 mv s3://cxar-ato-bigdata/snowplow-dev/CA/page_views/ s3://cxar-ato-bigdata/snowplow-dev/CA/archive/page_views/$DATE/ --recursive
echo "page view archived, moving on to product views..."
aws s3 mv s3://cxar-ato-bigdata/snowplow-dev/CA/product_views/ s3://cxar-ato-bigdata/snowplow-dev/CA/archive/product_views/$DATE/ --recursive
echo "product views archived, moving on to real estate..."
aws s3 mv s3://cxar-ato-bigdata/snowplow-dev/CA/real_estate/ s3://cxar-ato-bigdata/snowplow-dev/CA/archive/real_estate/$DATE/ --recursive
echo "real estate archived, moving on to search..."
aws s3 mv s3://cxar-ato-bigdata/snowplow-dev/CA/search/ s3://cxar-ato-bigdata/snowplow-dev/CA/archive/search/$DATE/ --recursive
echo "search archived, moving on to site promos..."
aws s3 mv s3://cxar-ato-bigdata/snowplow-dev/CA/site_promos/ s3://cxar-ato-bigdata/snowplow-dev/CA/archive/site_promos/$DATE/ --recursive
echo "site promos archived, moving on to snowplow add to cart..."
aws s3 mv s3://cxar-ato-bigdata/snowplow-dev/CA/snowplow_add_to_cart/ s3://cxar-ato-bigdata/snowplow-dev/CA/archive/snowplow_add_to_cart/$DATE/ --recursive
echo "snowplow add to cart archived, moving on to snowplow remove from cart..."
aws s3 mv s3://cxar-ato-bigdata/snowplow-dev/CA/snowplow_remove_from_cart/ s3://cxar-ato-bigdata/snowplow-dev/CA/archive/snowplow_remove_from_cart/$DATE/ --recursive
echo "snowplow remove from cart archived, moving on to timing..."
aws s3 mv s3://cxar-ato-bigdata/snowplow-dev/CA/timing/ s3://cxar-ato-bigdata/snowplow-dev/CA/archive/timing/$DATE/ --recursive
echo "All Done!"