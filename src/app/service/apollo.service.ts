import { Injectable } from '@angular/core';
import { catchError, map,tap  } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Apollo, gql, Mutation } from 'apollo-angular';
import { ChildsPerState, ChildsPerStateData, InsertOneParticipant, InsertOneParticipantData } from '../components/subscription/Subscriptor';

const INSERT_PARTICIPANT = gql`
  mutation insertParticipant($week: Int!,$numOfChildren: Int!, $reservationDate: DateTime, $deadline: DateTime) {
    insertOneParticipant(data: {
      state: "reservation"
      reservationDate: $reservationDate
      deadline: $deadline
      week: $week
      numOfChildren: $numOfChildren
    }) {
      _id
      deadline
      week
      numOfChildren
    }
  }
`;

const GET_RESERVATIONS_PER_WEEK= gql`
    query GetReservationsPerWeek($week:Int!) {
      childsPerState(input: $week) {
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

	InsertParticipant(week: number, numChildren: number):Observable<InsertOneParticipant> {
   return this.apollo.mutate<InsertOneParticipantData>({
      mutation: INSERT_PARTICIPANT,
      variables: {
        week: week,
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

  GetReservationsPerWeek(week: number):Observable<ChildsPerState[]> {
    console.log(`GetStaff`);
    return this.apollo
      .watchQuery<ChildsPerStateData>({
        query: GET_RESERVATIONS_PER_WEEK,
        variables: {week: week}
      })
      .valueChanges.pipe(
        tap(result => console.log(JSON.stringify(result.data.childsPerState))),
        map((result) => result.data.childsPerState));
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
