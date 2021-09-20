import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { insertOneSubscription, insertOneSubscriptionData } from '../models/Subscriptor';
import * as graphqlx from '../models/Graphqlx';

const UPDATE_SUBSCRITION = gql`
  mutation ($id: ObjectId, $subscriptionUpdateInput: SubscriptionUpdateInput!) {
    updateOneSubscription(
      query: { _id: $id }
      set: $subscriptionUpdateInput
    ) {
      _id
      state
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private apollo: Apollo) { }

  updateSubscription(id: string, variable: graphqlx.SubscriptionUpdateInput): Observable<insertOneSubscription> {
    return this.apollo.mutate<insertOneSubscriptionData>({
      mutation: UPDATE_SUBSCRITION,
      variables: {
        id, subscriptionUpdateInput: variable
      }
    }).pipe(
      tap(data => console.log('Products', JSON.stringify(data))),
      map(result => { return (<insertOneSubscriptionData>result.data).insertOneSubscription }),
      catchError(this.handleError)
    )
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