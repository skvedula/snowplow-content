exports.handler = function(event, context) {
    event.Records.forEach(function(record) {
        var payload = new Buffer(record.kinesis.data, 'base64').toString('utf8');
        var arr = [];
        var jsonholder = {};
        var snowplowschema = {};

        //Split on tab for thrift record decoding
        arr = payload.split("\t");

        parseThrift = function() {
            //parse thrift record and extract schema for loading into dynamodb
            for (var x = 0; x < arr.length; x++) {
                //check to see if first char starts a JSON schema
                if (arr[x] != ' ' && arr[x] !== '' && x !== 52) {
                    jsonholder[x] = arr[x];
                } else if (arr[x] != ' ' && arr[x] !== '' && x == 52) {
                    snowplowschema = JSON.parse(arr[52]);
                }
            } //end of thrift record processing

            //Start of snowplow schema processing
            if (snowplowschema.data.length === undefined) { //if single object (ga, add_to_cart, etc.)
                tempschema = snowplowschema.data.schema.split('/');
                jsonholder['vendor'] = tempschema[0];
                jsonholder['name'] = tempschema[1];
                jsonholder['version'] = tempschema[3];

                tempdata = snowplowschema.data;
                for (var key in tempdata) {
                    if (tempdata.hasOwnProperty(key)) {
                        if (key !== null && tempdata[key] !== null) {
                            var tempkey = key.toString();
                            var tempvalue = tempdata[key].toString();
                            jsonholder[tempkey] = tempvalue;
                        }
                    }
                }
            } else { //array of data objects inside schema (pageview, productview, etc.)
                for (var y = 0; y < snowplowschema.data.length; y++) {
                    tempschema = snowplowschema.data[y].schema.split('/');                    
                    jsonholder['vendor' + y] = tempschema[0];
                    jsonholder['name' + y] = tempschema[1];
                    jsonholder['version' + y] = tempschema[3];

                    tempdata = snowplowschema.data[y].data;
                    for (var key in tempdata) {
                        if (tempdata.hasOwnProperty(key)) {
                            if (key !== null && tempdata[key] !== null) {
                                var tempkey = key.toString();
                                var tempvalue = tempdata[key].toString();
                                jsonholder[tempkey + '' + y] = tempvalue;
                            }
                        }
                    }
                }
            } //end of schema parsing
            console.log(jsonholder);
        };
        parseThrift();
    });
    context.succeed('Thrift Record Processed');
};
