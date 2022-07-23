console.log("Loading function");
var AWS = require("aws-sdk");

exports.handler = function(event, context) {
    var eventText = JSON.stringify(event, null, 2);
    console.log("Received event:", eventText);
    var sns = new AWS.SNS();
    var params = {
        Message: eventText, 
        Subject: "AJ Things. Contact us request",
        TopicArn: "arn:aws:sns:ap-southeast-2:987867815164:contactus"
    };
    sns.publish(params, function(err, data) {
        if (err) {
            console.log(err.stack);

            // Notify Lambda that we are finished, but with errors
            context.done(err, 'Contactus function finished with errors!');  
            return;
        }
        console.log('push sent');
        console.log(data);

        // Notify Lambda that we are finished
        context.done(null, 'Function Finished!');  
    });
    
    const response = {
       statusCode: 200,
       //  Uncomment below to enable CORS requests
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        }, 
       body: JSON.stringify('ok'),
   };
   return response;
};