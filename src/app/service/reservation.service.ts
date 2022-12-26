import { Injectable } from '@angular/core';
import {
  catchError,
  combineLatest,
  map,
  mergeMap,
  Observable,
  take,
  tap,
} from 'rxjs';
import { environment } from '../../environments/environment';
import {
  Place,
  ReservationState,
  WeeklyReservation
} from '../models/Interfaces';
import { HttpClient } from '@angular/common/http';
import {
  ChildrenPerStateItem,
  Subscription as Inscription,
  SubscriptionInsertInput,
  SumPerWeekAndYear,
  Week,
} from 'netlify/models/Graphqlx';
import { InsertOneInscriptionResponse } from '../../../netlify/functions/insertOneInscription';
import * as InscriptionActions from '../modules/inscription/state/inscription.actions';
import { Store } from '@ngrx/store';
import * as InscriptionReducer from '../modules/inscription/state/inscription.reducer';
import { SumChildsPerStatePayload } from '../../../netlify/functions/getChildsPerState';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private readonly maxNumberOfReservations: number;
  constructor(
    private httpClient: HttpClient,
    private store: Store<InscriptionReducer.InscriptionState>
  ) {
    this.maxNumberOfReservations = +environment.MAX_NUMBER_OF_RESERVATIONS!;
  }

  create(payload: SubscriptionInsertInput): Observable<Inscription> {
    return this.httpClient
      .post<InsertOneInscriptionResponse>(
        `/api/insertOneInscription`,
        payload
      )
      .pipe(
        tap((p) => console.log(JSON.stringify(p))),
        map((result) => {
          return result?.message?.insertOneSubscription;
        }),
        catchError(this.handleError)
      );
  }

  insertOneSubscription(
    subscriptionInsertInput: SubscriptionInsertInput
  ): Observable<Inscription> {
    return this.httpClient
      .post<InsertOneInscriptionResponse>(
        `/api/insertOneInscription`,
        subscriptionInsertInput
      )
      .pipe(
        tap((p) => console.log(JSON.stringify(p))),
        map((result) => {
          return result?.message?.insertOneSubscription;
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
    throw errorMessage;
  }
}
