import { Injectable } from '@angular/core';
import {
  Subscription as Inscription,
  SubscriptionChild,
  Week,
} from '../../../netlify/models/Graphqlx';
import { MailPayload } from '../../../netlify/functions/triggerSubscribeEmail';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  writeMail(updateInscription: Inscription, week: Week) {
    const mailPayload: MailPayload = {
      subject: this.getSubject(updateInscription),
      year: this.getYear(updateInscription),
      salutation: this.getSalutation(updateInscription),
      state: this.getState(updateInscription),
      week: this.getWeek(updateInscription),
      date: this.getDates(week.dateFrom, week.dateTo),
      name: this.getName(updateInscription),
      street1: this.getStreet1(updateInscription),
      street2: this.getStreet2(updateInscription),
      city: this.getCity(updateInscription),
      country: this.getCountry(updateInscription),
      email: this.getMail(updateInscription),
      phone: this.getPhone(updateInscription),
      participants: this.getParticipantsPart(updateInscription),
      datetoday: this.getToday(),
    };
    //call to the Netlify Function you created
    fetch('./.netlify/functions/triggerSubscribeEmail', {
      method: 'POST',
      body: JSON.stringify(mailPayload),
    })
      .then((p) => console.log(`yeah ${p}`))
      .catch((x) => console.log(`ohno ${x}`))
      .finally(() => console.log(`live goes on`));
  }

  getSalutation(subscription: Inscription) {
    return `Liebe${
      subscription.salutation == 'M'
        ? 'r'
        : subscription.salutation == 'D'
        ? 'R'
        : ''
    } ${subscription.firstName} ${subscription.lastName}`;
  }

  getState(subscription: Inscription) {
    return `${
      subscription.state == 'definitive' ? 'Angemeldet' : 'Auf der Warteliste'
    }`;
  }

  getWeek(subscription: Inscription): string {
    return `Woche ${subscription.week}`;
  }

  getDates(dateFrom: Date, dateTo: Date): string {
    const datepipe: DatePipe = new DatePipe('de-CH');
    return `${datepipe.transform(dateFrom, 'dd.MM.YYYY') ?? ''} - ${
      datepipe.transform(dateTo, 'dd.MM.YYYY') ?? ''
    }`;
  }

  getName(subscription: Inscription): string {
    return `${subscription.firstName} ${subscription.lastName}`;
  }

  getStreet1(subscription: Inscription): string {
    return `${subscription.street1}`;
  }

  getStreet2(subscription: Inscription): string | undefined {
    return `${
      subscription.street2 !== '' ? subscription.street2 : undefined
    }`;
  }

  getCity(subscription: Inscription): string {
    return `${subscription.zip} ${subscription.city}`;
  }

  getCountry(subscription: Inscription): string {
    return `${subscription.country}`;
  }

  getMail(subscription: Inscription): string {
    return `${subscription.email}`;
  }

  getPhone(subscription: Inscription): string {
    return `${subscription.phone}`;
  }

  getToday(): string {
    const datepipe: DatePipe = new DatePipe('de-CH');
    return datepipe.transform(new Date(), 'dd.MM.YYYY HH:mm') ?? '';
  }

  getYear(subscription: Inscription): string {
    return subscription.year?.toString() ?? '';
  }

  getParticipantsPart(subscription: Inscription): object {
    if (!subscription.children) {
      return {};
    }

    let arrayOfStrings: string[] = [];

    subscription.children.forEach((participant) => {
      if (participant) {
        const comment = participant?.comment?.replace(/\r?\n/g, ' - ');
        arrayOfStrings.push(
          `${participant.firstNameParticipant} ${
            participant.lastNameParticipant
          }
              (${participant.salutation},
                *${String(participant.birthday.getDate()).padStart(
                  2,
                  '0'
                )}.${String(participant.birthday.getMonth() + 1).padStart(
            2,
            '0'
          )}.${participant.birthday.getFullYear()}
              ) -
            Fotos veröffentlichen erlaubt: ${
              participant.fotoAllowed ? 'ja' : 'nein'
            } -
            Kommentar: ${comment}
        `
        );
      }
    });

    return JSON.parse(JSON.stringify(arrayOfStrings));
  }

  private getSubject(subscription: Inscription) {
    const ix = subscription?.state?.indexOf('WaitingList');
    return ix && ix > 0
      ? 'Bestätigung Wartelisteneintrag Schlosswochen'
      : 'Bestätigung Anmeldung Schlosswochen';
  }
}
