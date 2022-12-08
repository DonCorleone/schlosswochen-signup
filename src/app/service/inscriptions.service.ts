import { Injectable } from '@angular/core';
import { Apollo, ApolloBase, gql } from 'apollo-angular';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import {
  Subscription as Inscription,
  SubscriptionQueryInput,
  SubscriptionUpdateInput,
} from 'netlify/models/Graphqlx';
import { ReservationState } from '../models/Interfaces';
import {InsertOneSubscriptionResponse} from "../../../netlify/functions/insertOneSubscription";
import {HttpClient} from "@angular/common/http";

interface SubscriptionData {
  subscription: Inscription;
}

export interface updateOneSubscriptionData {
  updateOneSubscription: Inscription;
}

export interface updateOneSubscriptionResponse {
  message: updateOneSubscriptionData;
}

@Injectable({
  providedIn: 'root',
})
export class InscriptionsService {
  private apollo: ApolloBase;

  constructor(private apolloProvider: Apollo, private httpClient: HttpClient) {
    this.apollo = this.apolloProvider.use('writeClient');
  }

  getInscription$(
    externalUserId: string,
    inscription: Inscription,
    reservationState: ReservationState
  ): Observable<Inscription> {
    if ((externalUserId == null || externalUserId == '') && inscription) {
      if (inscription.lastName) {
        return of(inscription);
      }
      return of(this.initializeInscription(inscription, reservationState));
    }
    return this.apollo
      .watchQuery<SubscriptionData>({
        query: gql`
          query ($externalUserId: String!) {
            subscription(query: { externalUserId: $externalUserId }) {
              _id
              externalUserId
              reservationDate
              week
              year
              numOfChildren
              email
              phone
              salutation
              firstName
              lastName
              street1
              street2
              zip
              city
              country
              participants {
                participant_id
                externalUserId
                salutation
                firstNameParticipant
                lastNameParticipant
                birthday
                comment
                fotoAllowed
              }
            }
          }
        `,
        variables: { externalUserId },
      })
      .valueChanges.pipe(
        map((result) => (<SubscriptionData>result?.data)?.subscription),
        catchError(this.handleError)
      );
  }

  updateOneSubscription(
    subscriptionQueryInput: SubscriptionQueryInput,
    subscriptionUpdateInput: SubscriptionUpdateInput
  ): Observable<Inscription> {
    return this.httpClient
      .post<updateOneSubscriptionResponse>(
        `.netlify/functions/updateOneSubscription`,
        {
          query: subscriptionQueryInput,
          set: subscriptionUpdateInput,
        }
      ).pipe(
        map((result: updateOneSubscriptionResponse) => {
          return result?.message?.updateOneSubscription;
        }),
        catchError(this.handleError)
      );
  }

  updateInscription(
    id: string,
    variable: SubscriptionUpdateInput
  ): Observable<Inscription> {
    return this.apollo
      .mutate<updateOneSubscriptionData>({
        mutation: gql`
          mutation (
            $id: ObjectId
            $subscriptionUpdateInput: SubscriptionUpdateInput!
          ) {
            updateOneSubscription(
              query: { _id: $id }
              set: $subscriptionUpdateInput
            ) {
              _id
              city
              country
              deadline
              email
              externalUserId
              firstName
              lastName
              numOfChildren
              participants {
                _id
                birthday
                comment
                externalUserId
                firstNameParticipant
                fotoAllowed
                lastNameParticipant
                participant_id
                salutation
              }
              phone
              reservationDate
              salutation
              state
              street1
              street2
              week
              zip
            }
          }
        `,
        variables: {
          id,
          subscriptionUpdateInput: variable,
        },
      })
      .pipe(
        // tap(result => console.log('SubscriptionService.updateSubscription: updateOneSubscriptionData', JSON.stringify(result))),
        map((result) => {
          return (<updateOneSubscriptionData>result?.data)
            ?.updateOneSubscription;
        }),
        catchError(this.handleError)
      );
  }

  updateExternalUserId(id: string, variable: string): Observable<string> {
    return this.apollo
      .mutate<updateOneSubscriptionData>({
        mutation: gql`
          mutation ($id: ObjectId, $externalUserId: String!) {
            updateOneSubscription(
              query: { _id: $id }
              set: { externalUserId: $externalUserId }
            ) {
              _id
            }
          }
        `,
        variables: {
          id,
          externalUserId: variable,
        },
      })
      .pipe(
        //   tap(result => console.log('SubscriptionService.updateExternalUserId: updateOneSubscriptionData', JSON.stringify(result))),
        map((result) => {
          return (<updateOneSubscriptionData>(
            result.data
          )).updateOneSubscription?._id?.toString();
        }),
        catchError(this.handleError)
      );
  }

  private handleError(err: any): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  private initializeInscription(
    inscription: Inscription,
    reservationState: ReservationState
  ): Inscription {
    // Return an initialized inscription
    return {
      _id: inscription._id,
      city: '',
      country: '',
      deadline: inscription.deadline,
      email: '',
      externalUserId: '',
      firstName: '',
      lastName: '',
      numOfChildren: inscription.numOfChildren,
      participants: [],
      phone: '',
      reservationDate: inscription.reservationDate,
      salutation: '',
      state: reservationState,
      street1: '',
      street2: '',
      week: inscription.week,
      year: inscription.year,
      zip: '',
    };
  }
}
