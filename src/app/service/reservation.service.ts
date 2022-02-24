import { Injectable } from '@angular/core';
import { Apollo, ApolloBase, gql } from 'apollo-angular';
import { Observable, throwError, catchError, map, tap  } from 'rxjs';
import { ChildsPerState, ChildsPerStateData } from '../models/Subscriptor';
import {
  Subscription as Inscription,
  SubscriptionInsertInput,
  Week,
} from '../models/Graphqlx';

export interface insertOneSubscriptionData {
  insertOneSubscription: Inscription;
}

interface weeksData {
  weeks: Week[];
}

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  insertOneSubscription(
    subscriptionInsertInput: SubscriptionInsertInput
  ): Observable<Inscription> {
    return this.apollo
      .mutate<insertOneSubscriptionData>({
        mutation: gql`
          mutation insertOneSubscription($data: SubscriptionInsertInput!) {
            insertOneSubscription(data: $data) {
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
              year
              zip
            }
          }
        `,
        variables: {
          data: subscriptionInsertInput,
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
          return (<insertOneSubscriptionData>result.data).insertOneSubscription;
        }),
        catchError(this.handleError)
      );
  }

  private apollo: ApolloBase;
  constructor(private apolloProvider: Apollo) {
    this.apollo = this.apolloProvider.use('writeClient');
  }

  getWeeks(year: number): Observable<Week[]> {
    return this.apollo
      .watchQuery<weeksData>({
        query: gql`
          query ($year: Int) {
            weeks(query: {year: $year}, sortBy: WEEK_ASC) {
              dateFrom
              dateTo
              week
              maxParticipants
            }
          }
        `,
        variables: { year },
      })
      .valueChanges.pipe(
        tap((result) => console.log(JSON.stringify(result))),
        map((result) => (<weeksData>result?.data)?.weeks),
        catchError(this.handleError));
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
