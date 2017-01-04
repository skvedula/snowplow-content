DATE=`date +%m%d%Y_%H%M`

echo "archiving any existing files..."
aws s3 mv s3://a0119-team/SNOWPLOW/page_views/ s3://a0119-team/SNOWPLOW/archive/page_views/$DATE/ --recursive
aws s3 mv s3://a0119-team/SNOWPLOW/orders/ s3://a0119-team/SNOWPLOW/archive/orders/$DATE/ --recursive

echo "copying page views"
aws s3 cp s3://cxar-ato-bigdata/marketing/page_views/ s3://a0119-team/SNOWPLOW/page_views/ --recursive
echo "page views done, now copying orders"
aws s3 cp s3://cxar-ato-bigdata/marketing/orders/ s3://a0119-team/SNOWPLOW/orders/ --recursive
echo "orders done."
echo "all tasks complete"