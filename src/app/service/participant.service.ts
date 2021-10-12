import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { EMPTY, Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Participant } from '../models/Participant';
import { MutationInsertOneParticipantArgs, ParticipantInsertInput } from '../models/Graphqlx';
import { Apollo, ApolloBase, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class ParticipantService {

  private participantsUrl = 'api/participants';
  private participants: Participant[] = [];

  private apollo: ApolloBase;
  constructor(private http: HttpClient, private apolloProvider: Apollo) {
    this.apollo = this.apolloProvider.use('writeClient');
  }

  getParticipants(): Observable<Participant[]> {
    if (this.participants) {
      return of(this.participants);
    }
    return this.http.get<Participant[]>(this.participantsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        tap(data => this.participants = data),
        catchError(this.handleError)
      );
  }

  createParticipant(variable: ParticipantInsertInput): Observable<ParticipantInsertInput> {
  //  insertOneParticipant(data: ParticipantInsertInput!): Participant

  //  ParticipantInsertInput

    return this.apollo.mutate<MutationInsertOneParticipantArgs>({
      mutation: gql`
        mutation ($participantInsertInput: ParticipantInsertInput!) {
          insertOneParticipant(
          data: $participantInsertInput
        ) {
          _id
          participant_id
          }
        }
      `,
      variables: {
        participantInsertInput: variable
      }
    }).pipe(
      tap(data => console.log('Products', JSON.stringify(data))),
      map(result => { return <ParticipantInsertInput>result.data?.data}),
      catchError(this.handleError)
    )
  }

  deleteParticipant(id: string): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.participantsUrl}/${id}`;
    return this.http.delete<Participant>(url, { headers })
      .pipe(
        tap(data => console.log('deleteParticipant: ' + id)),
        tap(data => {
          const foundIndex = this.participants.findIndex(item => item._id === id);
          if (foundIndex > -1) {
            this.participants.splice(foundIndex, 1);
          }
        }),
        catchError(this.handleError)
      );
  }

  updateParticipant(participant: Participant): Observable<Participant> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.participantsUrl}/${participant._id}`;
    return this.http.put<Participant>(url, participant, { headers })
      .pipe(
        tap(() => console.log('updateParticipant: ' + participant._id)),
        // Update the item in the list
        // This is required because the selected participant that was edited
        // was a copy of the item from the array.
        tap(() => {
          const foundIndex = this.participants.findIndex(item => item._id === participant._id);
          if (foundIndex > -1) {
            this.participants[foundIndex] = participant;
          }
        }),
        // Return the participant on an update
        map(() => participant),
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
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
