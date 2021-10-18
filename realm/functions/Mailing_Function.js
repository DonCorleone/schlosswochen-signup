exports = async function(changeEvent) {
          
  const sendGridApiUrl = "https://api.sendgrid.com/v3/mail/send";
  
  // Access to SendGrid API Key value stored in Stitch Secret
  const sendGridApiKey = context.values.get("schlosswochen-confirmation-mail-link");
  
  var guest = changeEvent.fullDocument;
      
  // Build email data 
  await BuildEmailData(guest).then(emailData =>{

    console.log ("emailData:" + JSON.stringify(emailData)); // For logging
    
    return context.http.post({
      url: sendGridApiUrl, headers: {Authorization: [`Bearer ${sendGridApiKey}`]}, body: emailData, encodeBodyAsJSON: true})
          .then(res =>{
            console.log (res.statusCode); // For logging
    });
  });
};

async function BuildEmailData (guest){
  
  var recipientEmail = guest.email;
  var recipientName = guest.firstName;
  var senderName = "Schlosswochen";
  var senderEmail = "noreplay@schlosswochen.ch"; //Replace with the email address appearing as sender
  var subject = "Schlosswochen-Anmeldung : " + guest.state;
  
  return await getParticipants(`^${guest._id}`).then(body => {
    
    var value = BuildEmailContentFromTemplate(senderName, recipientName, body);
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
          "value": value
        }
      ]
    };
  
    return emailData;
  })
}

function BuildEmailContentFromTemplate (senderName, recipientName, body){
  return `
    <!DOCTYPE html>
    <html>
    <head><title>Invitation</title></head>
    <body>
      <div>
          <h3>Dear ${recipientName},</h3>
          ${body}
          <br>
          ${senderName}
          </p>
     </div>
     
    </body>
  </html>`;
}
  
async function getParticipants(arg){
  var collection = context.services.get("mongodb-atlas").db("participantDb").collection("participants");
  var participants = `<h2>Participants</h2>`
  await collection.find({ participant_id: { $regex: arg }}).toArray().then((docs) => {
    docs.forEach(doc => {
      participants = participants + `<p>${doc.firstNameParticipant} ${doc.lastNameParticipant} (${doc.salutation})</p>`;
    })
  });
  return participants;
}
