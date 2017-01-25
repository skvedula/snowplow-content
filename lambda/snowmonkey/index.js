// var http = require('http');
var Ajv = require('ajv');
var ajv = Ajv(); // options can be passed, e.g. {allErrors: true}
var fs = require('fs');

var AWS = require('aws-sdk');
var DOC = require("dynamodb-doc");
AWS.config.update({region: "us-west-2"});
var docClient = new DOC.DynamoDB();

var pfunc = function(err, data) { 
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data);
    }
};


exports.handler = function(event, context) {
    event.Records.forEach(function(record) {
        var payload = new Buffer(record.kinesis.data, 'base64').toString('utf8');
        var raw_record_data = [];
        jsonForES = {};
        var properties;

        //Split on tab for thrift record decoding
        raw_record_data = payload.split("\t");

        //parse thrift record and extract schema for loading into elasticSearch
        // var parseThrift = function() {

            for (var record_counter = 0; record_counter < raw_record_data.length; record_counter++) {
                if (raw_record_data[record_counter].indexOf('{') > -1) {
                    var schemaName, schema, eventData, params, s3;
                    try {
                        var extractSchema = JSON.parse(raw_record_data[record_counter]);
                        if (extractSchema.data.length === undefined) {
                            schemaName = extractSchema.data.schema.split('/')[1];
                            // console.log(extractSchema.data.schema.replace('iglu:', ''));
                            schema = './schemas/' + extractSchema.data.schema.replace('iglu:', '');
                            // console.log(schema.toString('utf8'));
                            // fs.readFile(schema, function(err, data) {
                            //     if (err) {
                            //         console.log(err);
                            //         context.fail(null, err);
                            //     }
                            //     else {
                            //         console.log(data.toString('utf8'));
                            //         context.succeed('loaded schema');
                            //     }
                            // });
                        } else {
                            for (var nestedSchemaCount = 0; nestedSchemaCount < extractSchema.data.length; nestedSchemaCount++) {
                                schemaName = extractSchema.data[nestedSchemaCount].schema.split('/')[1];
                                console.log(schemaName);
                                schemaVersion = extractSchema.data[nestedSchemaCount].schema.split('/')[3];
                                console.log(schemaVersion);
                                // console.log(extractSchema.data[nestedSchemaCount].schema.replace('iglu:', ''));
                                schema = './schemas/' + extractSchema.data[nestedSchemaCount].schema.replace('iglu:', '');

                                  params = {};
                                    params.TableName = "46111-CXAR-ATO-sp-schemas";
                                    params.Key = {
                                        "schema-name" : "add_item_attrs", 
                                        "version": "1-0-0"
                                    };

                                  docClient.getItem(params, pfunc);
                                // console.log(extractSchema.data);
                                // fs.readFile(schema, function(err, data) {
                                //     if (err) {
                                //         console.log(err);
                                //         context.fail(null, err);
                                //     }
                                //     else {
                                //         // console.log(data.toString('utf8'));
                                //         var validate = ajv.compile(data);
                                //         var valid = validate(data);
                                //         if (!valid) context.fail(validate.errors);
                                //         else console.log('valid!');
                                //         context.succeed('loaded schema');
                                //     }
                                // });
                            }
                        }
                    } catch (e) {
                        console.log(e);   
                    }
                } else {//console.log(raw_record_data[record_counter]);
                    //jsonForES[lookupTable[record_counter]] = raw_record_data[record_counter];
                    // console.log('idk');
                }
            }
        // };
        // parseThrift();
    });
};