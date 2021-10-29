import { Injectable } from '@angular/core';
import { Apollo, ApolloBase, gql } from 'apollo-angular';
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import {
  updateOneSubscriptionData
} from '../models/Subscriptor';
import * as graphqlx from '../models/Graphqlx';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private apollo: ApolloBase;
  constructor(private apolloProvider: Apollo) {
    this.apollo = this.apolloProvider.use('writeClient');
  }


  updateSubscription(id: string, variable: graphqlx.SubscriptionUpdateInput): Observable<string> {
    return this.apollo.mutate<updateOneSubscriptionData>({
      mutation: gql`
        mutation ($id: ObjectId, $subscriptionUpdateInput: SubscriptionUpdateInput!) {
          updateOneSubscription(
            query: { _id: $id }
            set: $subscriptionUpdateInput
          ) {
            _id
          }
        }
      `,
      variables: {
        id, subscriptionUpdateInput: variable
      }
    }).pipe(
     // tap(result => console.log('SubscriptionService.updateSubscription: updateOneSubscriptionData', JSON.stringify(result))),
      map(result => { return (<updateOneSubscriptionData>result?.data)?.updateOneSubscription?._id?.toString()}),
      catchError(this.handleError)
    )
  }
  updateExternalUserId(id: string, variable: string): Observable<string> {
    return this.apollo.mutate<updateOneSubscriptionData>({
      mutation: gql
        `mutation ($id: ObjectId, $externalUserId: String!) {
            updateOneSubscription(
              query: { _id: $id }
            set: {externalUserId: $externalUserId}
          ) {
              _id
            }
          }`,
      variables: {
        id, externalUserId: variable
      }
    }).pipe(
   //   tap(result => console.log('SubscriptionService.updateExternalUserId: updateOneSubscriptionData', JSON.stringify(result))),
      map(result => { return (<updateOneSubscriptionData>result.data).updateOneSubscription?._id?.toString()}),
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
