

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const aws =  require("aws-sdk");
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    var sns = new aws.SNS();
    console.log('start of contactus function')
    console.log(event)
    sns.publish({
        Message: 'AJ Things contacts us form',
        TopicArn: 'arn:aws:sns:ap-southeast-2:987867815164:contactus'
    }, function(err, data) {
        if (err) {
            console.log(err.stack);

            // Notify Lambda that we are finished, but with errors
            //context.done(err, 'Contactus function finished with errors!');  
            return;
        }
        console.log('push sent');
        console.log(data);

        // Notify Lambda that we are finished
        //context.done(null, 'Function Finished!');  
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
