import { Injectable } from '@angular/core';
import { catchError, map,tap  } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Apollo, gql, Mutation } from 'apollo-angular';
import { FetchResult } from '@apollo/client/core';
import { InsertOneParticipant, InsertOneParticipantData } from '../components/subscription/Subscriptor';

const INSERT_PARTICIPANT = gql`
  mutation insertParticipant($numOfChildren: Int!, $reservationDate: DateTime, $deadline: DateTime) {
    insertOneParticipant(data: {
      state: "reservation"
      reservationDate: $reservationDate
      deadline: $deadline
      numOfChildren: $numOfChildren
    }) {
      _id
      deadline
      numOfChildren
    }
  }
`;


@Injectable({
  providedIn: 'root'
})
export class ApolloService {

  constructor(private apollo: Apollo) {
  }

	InsertParticipant(numChildren: number):Observable<InsertOneParticipant> {
   return this.apollo.mutate<InsertOneParticipantData>({
      mutation: INSERT_PARTICIPANT,
      variables: {
        numOfChildren: numChildren,
        reservationDate: new Date(),
				deadline: new Date(new Date().getTime() + ((10 + (numChildren*5))) * 60 * 1000)
      }
    }).pipe(
      tap(data => console.log('Products', JSON.stringify(data))),
      map(result => {return (<InsertOneParticipantData>result.data).insertOneParticipant}),
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
