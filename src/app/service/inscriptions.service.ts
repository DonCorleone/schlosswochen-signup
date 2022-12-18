import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import {
  Subscription as Inscription,
  SubscriptionQueryInput,
  SubscriptionUpdateInput,
} from 'netlify/models/Graphqlx';
import { ReservationState } from '../models/Interfaces';
import { HttpClient } from '@angular/common/http';

interface SubscriptionData {
  subscription: Inscription;
}

export interface updateOneInscriptionData {
  updateOneSubscription: Inscription;
}

export interface updateOneInscriptionResponse {
  message: updateOneInscriptionData;
}

@Injectable({
  providedIn: 'root',
})
export class InscriptionsService {
  constructor(private httpClient: HttpClient) {}

  getInscription$(
    externalUserId: string,
    inscription: Inscription,
    reservationState: ReservationState
  ): Observable<Inscription> {
    if ((externalUserId == null || externalUserId == '') && inscription) {
      if (inscription.lastName) {
        return of(inscription);
      }
      return of(this.initializeInscription(inscription, reservationState));
    }

    return this.httpClient
      .get<SubscriptionData>(
        `/api/getInscription?externalUserId=${externalUserId}`
      )
      .pipe(
        map((result: SubscriptionData) => result?.subscription),
        catchError(this.handleError)
      );
  }

  updateOneSubscription(
    inscriptionQueryInput: SubscriptionQueryInput,
    inscriptionUpdateInput: SubscriptionUpdateInput
  ): Observable<Inscription> {
    return this.httpClient
      .post<updateOneInscriptionResponse>(
        `/api/updateOneInscription`,
        {
          query: inscriptionQueryInput,
          set: inscriptionUpdateInput,
        }
      )
      .pipe(
        map((result: updateOneInscriptionResponse) => {
          return result?.message?.updateOneSubscription;
        }),
        catchError(this.handleError)
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

  private initializeInscription(
    inscription: Inscription,
    reservationState: ReservationState
  ): Inscription {
    // Return an initialized inscription
    return {
      _id: inscription._id,
      city: '',
      country: '',
      deadline: inscription.deadline,
      email: '',
      externalUserId: '',
      firstName: '',
      lastName: '',
      numOfChildren: inscription.numOfChildren,
      children: [],
      phone: '',
      reservationDate: inscription.reservationDate,
      salutation: '',
      state: reservationState,
      street1: '',
      street2: '',
      week: inscription.week,
      year: inscription.year,
      zip: '',
    };
  }
}
