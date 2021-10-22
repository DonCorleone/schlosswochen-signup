exports = async function(changeEvent) {
          
  const sendGridApiUrl = "https://api.sendgrid.com/v3/mail/send";
  
  // Access to SendGrid API Key value stored in Stitch Secret
  const sendGridApiKey = context.values.get("schlosswochen-confirmation-mail-link");
  
  var subscribtion = changeEvent.fullDocument;
      
  // Build email data 
  await BuildEmailData(subscribtion).then(emailData =>{

    console.log ("emailData:" + JSON.stringify(emailData)); // For logging
    
    return context.http.post({
      url: sendGridApiUrl, headers: {Authorization: [`Bearer ${sendGridApiKey}`]}, body: emailData, encodeBodyAsJSON: true})
          .then(res =>{
            console.log (res.statusCode); // For logging
    });
  });
};

async function BuildEmailData (subscribtion){
  
  var recipientEmail = subscribtion.email;
  var recipientName = subscribtion.firstName;
  var senderName = "Schlosswochen";
  var senderEmail = "noreplay@schlosswochen.ch"; //Replace with the email address appearing as sender
  var subject = "Schlosswochen-Anmeldung : " + subscribtion.state;
  
  return await getparticipantPart(`^${subscribtion._id}`).then(participantPart => {
    
    var value = BuildEmailContentFromTemplate(`<em>weekDate</em>`,subscribtion, participantPart);
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

function BuildEmailContentFromTemplate (weekDate, subscribtion, participantPart){
  return `
<!DOCTYPE html>
<html>
  <head>
  </head>
   <body>
    <div id='body'>
      <div id='title'>
        <h2>Schlosswochen 2022</h2>
      </div>
      <p>
        <h4><strong>Liebe${subscribtion.salutation == 'M' ? 'r' : subscribtion.salutation == 'D' ? 'R' : ''} ${subscribtion.firstName} ${subscribtion.lastName}</strong></h4></p>
      <div class="text">Besten Dank für die Anmeldung zu den Schlosswochen 2022. Folgende Angaben wurden uns erfolgreich übermittelt:</div>
      <h3>Woche ${subscribtion.week}</h3>
      <p>${weekDate}</p>
      <hr>
      <h3>Kontaktangaben</h3>
      <h4><strong>Anschrift:</strong></h4>
      <p>
        ${subscribtion.firstName} ${subscribtion.lastName}<br>
        ${subscribtion.street1}<br>
        ${subscribtion.street2 !== '' ? subscribtion.street2 + '<br>': ''}
        ${subscribtion.zip} ${subscribtion.city}<br>
        ${subscribtion.country}
      </p>
      <h4><strong>Kontakt:</strong></h4>
      <p>
        ${subscribtion.email}<br>
        ${subscribtion.phone}<br>
      </p>

      <hr>
      <h3>Teilnehmende</h3>
      ${participantPart}
      <div class="text">
        Die Anmeldung ist hiermit definitiv und verpflichtend gem. AGB. <br>
        Sie erhalten kurz vor Beginn der Schlosswochen weitere Informationen. Wir verbleiben bis dahin:<br>
        <br>
      </div>
      <div class="sender">
        OK Schlosswochen
      </div>
    </div>
  </body>
</html>
`;
}
  
async function getparticipantPart(arg){
  var collection = context.services.get("mongodb-atlas").db("participantDb").collection("participants");
  var participantPart = `<ul>`;
  await collection.find({ participant_id: { $regex: arg }}).toArray().then((participants) => {
    participants.forEach(participant => {
      participantPart = participantPart + `
        <li>
          ${participant.firstNameParticipant} ${participant.lastNameParticipant} 
            (${participant.salutation}, 
              *${String(participant.birthday.getDate()).padStart(2, '0')}.${String(participant.birthday.getMonth() + 1).padStart(2, '0')}.${participant.birthday.getFullYear()}
            )<br>
          Fotos veröffentlichen erlaubt: ${participant.fotoAllowed}<br>
          ${participant.comment}
        </li>
      `;
    })
  });
  return participantPart + `</ul>`;
}
