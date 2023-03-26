exports = async function (changeEvent) {
  var subscribtion = changeEvent.fullDocument;

  await buildEmailDataTxt(subscribtion).then((emailData) => {});
};

async function buildEmailDataTxt(subscription) {
  return await getWeekDate(subscription.week, subscription.year).then(
    (weekDates) => {
      var participantPart = getParticipantsPart(subscription.children);
      var bodyHtml = buildEmailContentFromTemplate(
        subscription,
        participantPart,
        weekDates
      );

      var participantPartTxt = getParticipantsPartTxt(subscription.children);
      var bodyTxt = buildEmailContentFromTemplateTxt(
        subscription,
        participantPartTxt,
        weekDates
      );

      // Require:
      var postmark = require("postmark");
      // Access to SendGrid API Key value stored in Stitch Secret
      const postmarkApiKey = context.values.get("postmark-api-value");
      // Send an email:
      var client = new postmark.ServerClient(
        postmarkApiKey
      );

      var recipientEmail = subscription.email;
      var recipientName = subscription.firstName;
      var senderName = "Schlosswochen";
      var senderEmail = "anmeldungen@schlosswochen.ch";
      var subject =
        subscription.state == "definitive"
          ? "Bestätigung Schlosswochen-Anmeldung"
          : "Bestätigung Wartelisteneintrag Schlosswochen";

      client.sendEmail({
        From: senderEmail,
        To: recipientEmail,
        Subject: subject,
        HtmlBody: bodyHtml,
        TextBody: bodyTxt,
        MessageStream: "outbound",
      });

      var emailData = {
        personalizations: [
          {
            to: [
              {
                email: recipientEmail,
              },
            ],
            subject: subject,
          },
        ],
        from: {
          email: senderEmail,
        },
        content: [
          {
            type: "text/html",
            value: bodyHtml,
          },
        ],
      };

      return emailData;
    }
  );
}

async function getWeekDate(week, year) {
  const cluster = context.services.get("mongodb-atlas");
  const weeks = cluster.db("participantDb").collection("weeks");

  const pipeline = [
    { $match: { $and: [{ week: { $eq: week } }, { year: { $eq: year } }] } },
    {
      $project: {
        _id: 0,
        "date-from": 1,
        "date-to": 1,
      },
    },
  ];
  return await weeks.aggregate(pipeline).toArray();
}

function buildEmailContentFromTemplate(
  subscribtion,
  participantPart,
  weekDates
) {
  const dateFrom = new Date(weekDates[0]["date-from"]);
  const dateTo = new Date(weekDates[0]["date-to"]);

  return `
<!DOCTYPE html>
<html>
  <head>
  </head>
   <body>
    <div id='body'>
      <div id='title'>
        <h2>Schlosswochen ${subscribtion.year}</h2>
      </div>
      <p>
        <h4><strong>Liebe${
    subscribtion.salutation == "M"
      ? "r"
      : subscribtion.salutation == "D"
        ? "R"
        : ""
  } ${subscribtion.firstName} ${subscribtion.lastName}</strong></h4></p>
      <div class="text">Besten Dank für die Anmeldung zu den Schlosswochen ${subscribtion.year}. Folgende Angaben wurden uns erfolgreich übermittelt:</div>
      <h3>Status</h3>
      <p>${
    subscribtion.state == "definitive" ? "Angemeldet" : "Auf der Warteliste"
  }</p>
      <h3>Woche ${subscribtion.week}</h3>
      <p>${padDate(dateFrom)} - ${padDate(dateTo)}</p>
      <hr>
      <h3>Kontaktangaben</h3>
      <h4><strong>Anschrift:</strong></h4>
      <p>
        ${subscribtion.firstName} ${subscribtion.lastName}<br>
        ${subscribtion.street1}<br>
        ${subscribtion.street2 !== "" ? subscribtion.street2 + "<br>" : ""}
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
      <br>
        <p>Danke für die Anmeldung! Diese ist hiermit definitiv und verpflichtend gem. <a href="https://www.schlosswochen.ch/assets/pdf/agb_schlosswochen_${subscribtion.year}.pdf" target="_blank">AGB</a>.<br>
        Kurz vor Beginn der Schlosswochen werden weitere Informationen von uns versendet.<br>
        <br>
        Wir freuen uns auf kreative und lustige Schlosswochen mit den Kindern.<br>
        <br>
        Herzliche Grüsse<br>
        Das Schlosswochen-Team<br>
        </p>
    </div>
    <p>Luzern ${new Date().toString()}</p>
  </body>
</html>
`;
}

function buildEmailContentFromTemplateTxt(
  subscribtion,
  participantPart,
  weekDates
) {
  const dateFrom = new Date(weekDates[0]["date-from"]);
  const dateTo = new Date(weekDates[0]["date-to"]);

  return `
*** Schlosswochen ${subscribtion.year}


Liebe${
    subscribtion.salutation == "M"
      ? "r"
      : subscribtion.salutation == "D"
        ? "R"
        : ""
  } ${subscribtion.firstName} ${subscribtion.lastName}

Besten Dank für die Anmeldung zu den Schlosswochen ${subscribtion.year}.
Folgende Angaben wurden uns erfolgreich übermittelt:

** Status
${subscribtion.state == "definitive" ? "Angemeldet" : "Auf der Warteliste"}

** Woche ${subscribtion.week}
${padDate(dateFrom)} - ${padDate(dateTo)}

** Kontaktangaben

* Anschrift:
${subscribtion.firstName} ${subscribtion.lastName}
${subscribtion.street1}
${subscribtion.street2 !== "" ? subscribtion.street2 + "" : ""}
${subscribtion.zip} ${subscribtion.city}
${subscribtion.country}

* Kontakt:
${subscribtion.email}
${subscribtion.phone}

** Teilnehmende
${participantPart}

Danke für die Anmeldung! Diese ist hiermit definitiv und verpflichtend gem. AGB. (https://www.schlosswochen.ch/assets/pdf/agb_schlosswochen_${subscribtion.year}.pdf)
Kurz vor Beginn der Schlosswochen werden weitere Informationen von uns versendet.

Wir freuen uns auf kreative und lustige Schlosswochen mit den Kindern.

Herzliche Grüsse
Das Schlosswochen-Team

${new Date().toString()}
`;
}

function getDateFromValues(year, week, rangeName) {
  const moment = require("moment");
  const savedValue = `week-${year}-${week}-${rangeName}`;
  const weekfrom = new Date(context.values.get(savedValue));
  let now = moment(weekfrom);

  return now.format("DD.MM.YYYY");
}

function getParticipantsPart(children) {
  var participantPart = `<ul>`;

  children.forEach((child) => {
    var birthday = new Date(child.birthday);
    var comment = child.comment.replace(/\r?\n/g, "<br />");
    participantPart =
      participantPart +
      `
    <li>
      ${child.firstNameParticipant} ${child.lastNameParticipant}
        (${child.salutation},
          *${String(birthday.getDate()).padStart(2, "0")}.${String(
        birthday.getMonth() + 1
      ).padStart(2, "0")}.${birthday.getFullYear()}
        )<br>
      Fotos veröffentlichen erlaubt: ${child.fotoAllowed ? "ja" : "nein"}<br>
      Kommentar: ${comment}<br>
    </li>
  `;
  });

  return participantPart + `</ul>`;
}

function getParticipantsPartTxt(children) {
  var participantPart = ``;

  children.forEach((child) => {
    var comment = child.comment.replace(/\r?\n/g, "/n");
    var birthday = new Date(child.birthday);
    participantPart =
      participantPart +
      `
-- ${child.firstNameParticipant} ${child.lastNameParticipant} (${
        child.salutation
      }, *${padDate(birthday)})})
- Fotos veröffentlichen erlaubt: ${child.fotoAllowed ? "ja" : "nein"}
- Kommentar: ${comment}
`;
  });

  return participantPart + ``;
}

function padDate(date) {
  return `${String(date.getDate()).padStart(2, "0")}.${String(
    date.getMonth() + 1
  ).padStart(2, "0")}.${date.getFullYear()}`;
}
