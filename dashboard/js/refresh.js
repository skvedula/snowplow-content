/* Copyright 2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use 
this file except in compliance with the License. A copy of the License is 
located at
http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an 
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or 
implied. See the License for the specific language governing permissions and 
limitations under the License. */

// Region and IdentityPoolId should be set to your own values
AWS.config.region = 'us-west-2'; // Region
AWS.config.credentials = {
    accessKeyId: 'AKIAIFFXNTBEVT2MEAKQ',
    secretAccessKey: 'GJIk2D8ukHidX9t00eLBn0r+aaOORs9IomwMQCch'
};

var dynamodb = new AWS.DynamoDB();
var params = {
    TableName: 'snowplow-enriched'
};

/* Create the context for applying the chart to the HTML canvas */
var ctx = $("#graph").get(0).getContext("2d");

/* Set the options for our chart */
var options = {
    segmentShowStroke: false,
    animateScale: true,
    percentageInnerCutout: 50,
    showToolTips: true,
    tooltipEvents: ["mousemove", "touchstart", "touchmove"],
    tooltipFontColor: "#fff",
    animationEasing: 'easeOutCirc'
};

/* Set the initial data */
var init = [{
    value: 260,
    color: "#2ecc71",
    highlight: "#27ae60",
    label: "Page View"
}, {
    value: 185,
    color: "#3498db",
    highlight: "#2980b9",
    label: "Product View"
}];

graph = new Chart(ctx).Doughnut(init, options);

/* Create the context for applying the chart to the HTML canvas */
var ctx = $("#graph2").get(0).getContext("2d");

/* Set the options for our chart */
var options2 = {
    segmentShowStroke: false,
    animateScale: true,
    percentageInnerCutout: 50,
    showToolTips: true,
    tooltipEvents: ["mousemove", "touchstart", "touchmove"],
    tooltipFontColor: "#fff",
    animationEasing: 'easeOutCirc'
};

/* Set the initial data */
var init2 = [{
    value: 70,
    color: "#2ecc71",
    highlight: "#27ae60",
    label: "Add to Bag"
}, {
    value: 30,
    color: "#e74c3c",
    highlight: "#c0392b",
    label: "Remove from Bag"
}];

graph2 = new Chart(ctx).Doughnut(init2, options2);


$(function() {
    getData();
    $.ajaxSetup({
        cache: false
    });
    /* Get the data every 3 minutes (avg data refresh dynamo) */
    setInterval(getData, 180000);
});

/* Makes a scan of the DynamoDB table to set a data object for the chart */
function getData() {
    dynamodb.scan(params, function(err, data) {
        if (err) {
            console.log(err);
            return null;
        } else {
            var pageview_count = 0;
            var productview_count = 0;
            var addtobag_count = 0;
            var removefrombag_count = 0;
            var cookies_count = 0;

            var comparisonValue = '';

            for (var i in data['Items']) {
                comparisonValue = data['Items'][i]['schema-type'].S;
                if (comparisonValue.indexOf("pageview") >= 0) {
                    pageview_count += 1;
                }
                if (comparisonValue.indexOf("product") >= 0) {
                    productview_count += 1;
                }
                if (comparisonValue.indexOf("add") >= 0) {
                    addtobag_count += 1;
                }
                if (comparisonValue.indexOf("remove") >= 0) {
                    removefrombag_count += 1;
                }
                if (comparisonValue.indexOf("cookies") >= 0) {
                    cookies_count += 1;
                }
            }
            console.log('pageview_count: ' + pageview_count);
            console.log('productview_count: ' + productview_count);
            console.log('addtobag_count: ' + addtobag_count);
            console.log('removefrombag_count: ' + removefrombag_count);
            console.log('cookies_count: ' + cookies_count);


            var viewActionData = [{
                value: pageview_count,
                color: "#2ecc71",
                highlight: "#27ae60",
                label: "Page View"
            }, {
                value: productview_count,
                color: "#3498db",
                highlight: "#2980b9",
                label: "Product View"
            }];

            var bagActionData = [{
                value: addtobag_count,
                color: "#2ecc71",
                highlight: "#27ae60",
                label: "Add to Bag"
            }, {
                value: removefrombag_count,
                color: "#e74c3c",
                highlight: "#c0392b",
                label: "Remove from Bag"
            }];


            // Only update if we have new values (preserves tooltips) 
            if (graph.segments[0].value != viewActionData[0].value ||
                graph.segments[1].value != viewActionData[1].value
            ) {
                graph.segments[0].value = viewActionData[0].value;
                graph.segments[1].value = viewActionData[1].value;
                graph.update();
            }

            // Only update if we have new values (preserves tooltips) 
            if (graph2.segments[0].value != bagActionData[0].value ||
                graph2.segments[1].value != bagActionData[1].value
            ) {
                graph2.segments[0].value = bagActionData[0].value;
                graph2.segments[1].value = bagActionData[1].value;
                graph2.update();
            }


        }
    });
}
