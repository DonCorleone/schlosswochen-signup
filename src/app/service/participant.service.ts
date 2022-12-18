import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { upsertOneParticipantResponse } from '../../../netlify/functions/upsertOneParticipant';
import { upsertManyParticipantResponse } from '../../../netlify/functions/upsertManyParticipant';

@Injectable({
  providedIn: 'root',
})
export class ParticipantService {
  private participantsUrl = 'api/participants';
 // private participants: Participant[] = [];

  constructor(private httpClient: HttpClient) {}

/*  updateExternalUserId(
    ids: string[],
    externalUserId: string
  ): Observable<number> {
    const varQuery: Partial<ParticipantQueryInput> = {
      participant_id_in: ids,
    };

    const varSet: Partial<ParticipantUpdateInput> = {
      externalUserId: externalUserId,
    };

    return this.httpClient
      .post<upsertManyParticipantResponse>(
        `/api/upsertManyParticipant`,
        {
          query: varQuery,
          data: varSet,
        }
      )
      .pipe(
        map((result: upsertManyParticipantResponse) => {
          return result.message?.matchedCount;
        }),
        catchError(this.handleError)
      );
  }*/

/*  upsertParticipant(
    data: ParticipantInsertInput,
    participantId: string
  ): Observable<ParticipantInsertInput> {
    let subscriptionQueryInput: Partial<ParticipantQueryInput> = {
      participant_id: participantId,
    };

    return this.httpClient
      .post<upsertOneParticipantResponse>(
        `/api/upsertOneParticipant`,
        {
          query: subscriptionQueryInput,
          data: data,
        }
      )
      .pipe(
        map((result: upsertOneParticipantResponse) => {
          return result?.message?.insertOneSubscription;
        }),
        catchError(this.handleError)
      );
  }*/

  /*  deleteParticipant(id: string): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.participantsUrl}/${id}`;
    return this.httpClient.delete<Participant>(url, { headers }).pipe(
      tap((data) => console.log('deleteParticipant: ' + id)),
      tap((data) => {
        const foundIndex = this.participants.findIndex(
          (item) => item._id === id
        );
        if (foundIndex > -1) {
          this.participants.splice(foundIndex, 1);
        }
      }),
      catchError(this.handleError)
    );
  }*/

  /*  updateParticipant(participant: Participant): Observable<Participant> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.participantsUrl}/${participant._id}`;
    return this.httpClient.put<Participant>(url, participant, { headers }).pipe(
      tap(() => console.log('updateParticipant: ' + participant._id)),
      // Update the item in the list
      // This is required because the selected participant that was edited
      // was a copy of the item from the array.
      tap(() => {
        const foundIndex = this.participants.findIndex(
          (item) => item._id === participant._id
        );
        if (foundIndex > -1) {
          this.participants[foundIndex] = participant;
        }
      }),
      // Return the participant on an update
      map(() => participant),
      catchError(this.handleError)
    );
  }*/

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
