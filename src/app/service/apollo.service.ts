import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Apollo, gql, Mutation } from 'apollo-angular';
import { ChildsPerState, ChildsPerStateData, insertOneSubscription, insertOneSubscriptionData } from '../models/Subscriptor';
import { getLocaleExtraDayPeriodRules } from '@angular/common';

const INSERT_PARTICIPANT = gql`
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

const UPDATE_PARTICIPANT = gql`
  mutation insertSubscription($id: ObjectId, $subscriptionUpdateInput: SubscriptionUpdateInput!) {
    updateOneSubscription(
      query: { _id: $id }
      set: $subscriptionUpdateInput
    ) {
      _id
      state
    }
  }
`;

const GET_RESERVATIONS_PER_WEEK = gql`
    query GetReservationsPerWeek($week:Int!) {
      sumChildsPerState(input: $week) {
        state
        sumPerStateAndWeek
      }
    }
  `;


@Injectable({
  providedIn: 'root'
})
export class ApolloService {

  constructor(private apollo: Apollo) {
  }

  InsertParticipant(variable: Record<string, any>): Observable<insertOneSubscription> {
    return this.apollo.mutate<insertOneSubscriptionData>({
      mutation: INSERT_PARTICIPANT,
      variables: variable
    }).pipe(
      tap(data => console.log('Products', JSON.stringify(data))),
      map(result => { return (<insertOneSubscriptionData>result.data).insertOneSubscription }),
      catchError(this.handleError)
    )
  }


  UpdateParticipant(id: string, variable: any): Observable<insertOneSubscription> {
    return this.apollo.mutate<insertOneSubscriptionData>({
      mutation: UPDATE_PARTICIPANT,
      variables: {
        id, subscriptionUpdateInput: variable
      }
    }).pipe(
      tap(data => console.log('Products', JSON.stringify(data))),
      map(result => { return (<insertOneSubscriptionData>result.data).insertOneSubscription }),
      catchError(this.handleError)
    )
  }

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
