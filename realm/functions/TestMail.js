exports = function() {
          
    const sendGridApiUrl = "https://api.sendgrid.com/v3/mail/send";
    
    // Access to SendGrid API Key value stored in Stitch Secret
    const sendGridApiKey = context.values.get("schlosswochen-confirmation-mail-link");
    
     // Access the latest version of the document
    // var guest = changeEvent.fullDocument;
    
    // Build email data 
    var emailData = BuildEmailData();
    console.log(sendGridApiKey);
    //  Access the default http client and execute a POST request
    return context.http.post({
      url: sendGridApiUrl, headers: {Authorization: [`Bearer ${sendGridApiKey}`]}, body: emailData, encodeBodyAsJSON: true})
          .then(res =>{
            console.log (res.statusCode); // For logging
          });
  
};

/**
 * This function returns a JSON object that respects the format of SendGrid API Request Body
 * 
 * @param {object} inserted document - JSON object
 * @return {object} returns a JSON object
 * 
*/
  function BuildEmailData (){
    
    var recipientEmail = "vitocorleone77@gmail.com";
    var recipientName = "Lini";
    var senderName = "Your Party Buddy";
    var senderEmail = "noreplay@schlosswochen.ch"; //Replace with the email address appearing as sender
    var subject = "Invitation to mega party";
    
    var emailData = {
      "personalizations": [
       {
          "to": [
            {
              "email": recipientEmail
            }
          ],
          "subject": subject
        }
      ],
      "from": {
        "email": senderEmail
      },
      "content": [
        {
          "type": "text/html",
          "value": BuildEmailContentFromTemplate(senderName, recipientName)
        }
      ]
      };
    
   return emailData;
  }
  
  
  
  
/**
 * This function builds a HTML email content
 * 
 * @param {string} sender name
 * @param {string} recipient name
 * @return {string} returns a string
 * 
*/
  function BuildEmailContentFromTemplate (senderName, recipientName){
  return `
  <!DOCTYPE html>
  <html>
  <head><title>Invitation</title></head>
  <body>
    <div>
        <h3>Dear ${recipientName},</h3>
        <p> <b>I am holding the wildest party</b>,
        <br>
        Please come by my place at 7 for drinks, cake and chicken wings (and bring your dancing shoes!).
        </p>
        <p>Cheers!
        <br>
        ${senderName}
        </p>
   </div>
   
  </body>
</html>`;
  }
