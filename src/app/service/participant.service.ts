import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Participant } from '../models/Participant';

@Injectable({
  providedIn: 'root',
})
export class ParticipantService {

  private participantsUrl = 'api/participants';
  private participants: Participant[] = [];

  constructor(private http: HttpClient) { }

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

  createParticipant(participant: Participant): Observable<Participant> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // Participant Id must be null for the Web API to assign an Id
    const newParticipant = { ...participant, id: null };
    return this.http.post<Participant>(this.participantsUrl, newParticipant, { headers })
      .pipe(
        tap(data => console.log('createParticipant: ' + JSON.stringify(data))),
        tap(data => {
          this.participants.push(data);
        }),
        catchError(this.handleError)
      );
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
