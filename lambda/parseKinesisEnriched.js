var aws = require('aws-sdk');
var dynamodb = new aws.DynamoDB();

exports.handler = function(event, context) {
    console.log('Number of Records: ', event.Records.length);
    event.Records.forEach(function(record) {
        var payload = new Buffer(record.kinesis.data, 'base64').toString('ascii');
        var arr = [];
        var d = new Date();
        var n = d.getTime();
        var jsonholder = '',
            tempschema = '',
            tempdata = '',
            schematype = '',
            schemaversion = '',
            params = {};

        //Split on tab for thrift record decoding
        arr = payload.split("\t");

        try {
            insertIntoDynamo = function() {
                    //parse thrift record and extract schema for loading into dynamodb
                    for (var x = 0; x < arr.length; x++) {
                        //check to see if first char starts a JSON schema
                        if (arr[x] != ' ' && arr[x] !== '' && arr[x].charAt(0) == '{') {
                            //Debug: log the schema you are about to parse
                            console.log('Value of arr[x] trying to be parsed: ', arr[x]);
                            jsonholder = JSON.parse(arr[x]);
                            for (var y = 0; y < jsonholder.data.length; y++) {
                                params = {
                                    TableName: 'snowplow-enriched',
                                    Item: {
                                        "schema-type": {
                                            S: "test_schema"
                                        },
                                        "schema-version": {
                                            S: "0-0-1"
                                        }
                                    }
                                };
                                //Get Schema name and version for inserting into dynamodb
                                tempschema = jsonholder.data[y].schema;
                                tempschema = tempschema.split('/');
                                schematype = tempschema[1] + '_' + n;
                                schemaversion = tempschema[3];
                                params.Item["schema-type"] = {
                                    S: schematype
                                };
                                params.Item["schema-version"] = {
                                    S: schemaversion
                                };

                                //DEBUG
                                //console.log('Schema Type: ', schematype, " Schema Version: ", schemaversion);

                                //grab all keys and values for inserting into dynamodb
                                tempdata = jsonholder.data[y].data;
                                for (var key in tempdata) {
                                    if (tempdata.hasOwnProperty(key)) {
                                        //params.Item["new attribute"] = {S: "my-new-attribute"}
                                        if (key !== null && tempdata[key] !== null) {
                                            var tempkey = key.toString();
                                            var tempvalue = tempdata[key].toString();
                                            params.Item[tempkey] = {
                                                S: tempvalue
                                            };
                                        }
                                    }
                                }
                                console.log(params);
                                dynamodb.putItem(params, function(err, data) {
                                    if (err) {
                                        context.fail("Error in putItem " + err);
                                    } else {
                                        context.succeed('Successfully Inserted Record');
                                    }
                                });
                            } //End of for loop for multiple schemas
                        } //end of schema parsing
                    } //End of thrift record
                } //end of insertIntoDynamo
            insertIntoDynamo();
        } catch (err) {
            context.fail("Caught: " + err);
        }
    });
};