

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 
 console.log('Loading function');
 var aws = require('aws-sdk');
 
 exports.handler = function(event, context) {
     var sns = new aws.SNS();
     console.log('start of contactus function')
     console.log(e)
     sns.publish({
         Message: 'AJ Things contacts us form',
         TopicArn: 'arn:aws:sns:ap-southeast-2:987867815164:contactus'
     }, function(err, data) {
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
 };
 