import { Injectable } from '@angular/core';
import { Apollo, ApolloBase, gql } from 'apollo-angular';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {
  ChildsPerState,
  ChildsPerStateData, upsertOneSubscriptionData,
} from '../models/Subscriptor';
import {
  Subscription,
  SubscriptionInsertInput,
  SubscriptionQueryInput,
} from '../models/Graphqlx';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  createWeeklyReservation(
    subscriptionInsertInput: SubscriptionInsertInput,
    subscriptionQueryInput: SubscriptionQueryInput
  ): Observable<Subscription> {
    return this.apollo
      .mutate<upsertOneSubscriptionData>({
        mutation: gql`
          mutation upsertOneSubscription(
            $data: SubscriptionInsertInput!
            $query: SubscriptionQueryInput
          ) {
            upsertOneSubscription(data: $data, query: $query) {
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
          data: subscriptionInsertInput,
          query: subscriptionQueryInput,
        },
      })
      .pipe(
        tap((data) =>
          console.log(
            'ReservationService.createWeeklyReservation.insertOneSubscription',
            JSON.stringify(data)
          )
        ),
        map((result) => {
          return (<upsertOneSubscriptionData>result.data).upsertOneSubscription;
        }),
        catchError(this.handleError)
      );
  }

  private apollo: ApolloBase;
  constructor(private apolloProvider: Apollo) {
    this.apollo = this.apolloProvider.use('writeClient');
  }

  getReservationsPerWeek(week: number): Observable<ChildsPerState[]> {
    console.log(`Get Reservations Per Week`);
    return this.apollo
      .watchQuery<ChildsPerStateData>({
        query: gql`
          query GetReservationsPerWeek($week: Int!) {
            sumChildsPerState(input: $week) {
              state
              sumPerStateAndWeek
            }
          }
        `,
        variables: { week: week },
        fetchPolicy: 'no-cache',
      })
      .valueChanges.pipe(
        tap((result) => console.log(JSON.stringify(result))),
        map((result) => result.data.sumChildsPerState)
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
}
