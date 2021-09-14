import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ChildsPerState, ChildsPerStateData, insertOneSubscription, insertOneSubscriptionData } from '../models/Subscriptor';

const GET_RESERVATIONS_PER_WEEK = gql`
    query GetReservationsPerWeek($week:Int!) {
      sumChildsPerState(input: $week) {
        state
        sumPerStateAndWeek
      }
    }
  `;

const INSERT_RESERVATIONS_PER_WEEK = gql`
  mutation insertSubscription($subscriptionInsertInput: SubscriptionInsertInput!) {
    insertOneSubscription(
      data: $subscriptionInsertInput
    ){
      _id
      deadline
      week
      numOfChildren
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  createWeeklyReservation(variable: Record<string, any>): Observable<string> {
    return this.apollo.mutate<insertOneSubscriptionData>({
      mutation: INSERT_RESERVATIONS_PER_WEEK,
      variables: variable
    }).pipe(
      tap(data => console.log('Products', JSON.stringify(data))),
      map(result => { return (<insertOneSubscriptionData>result.data).insertOneSubscription._id }),
      catchError(this.handleError)
    )
  }

  constructor(private apollo: Apollo) { }

  GetReservationsPerWeek(week: number): Observable<ChildsPerState[]> {
    console.log(`Get Reservations Per Week`);
    return this.apollo
      .watchQuery<ChildsPerStateData>({
        query: GET_RESERVATIONS_PER_WEEK,
        variables: { week: week },
        fetchPolicy: 'no-cache'
      })
      .valueChanges.pipe(
        tap(result => console.log(JSON.stringify(result.data.sumChildsPerState))),
        map((result) => result.data.sumChildsPerState));
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
