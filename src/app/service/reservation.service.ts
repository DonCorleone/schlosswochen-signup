import { Injectable } from '@angular/core';
import {
  catchError,
  combineLatest,
  map,
  mergeMap,
  Observable,
  tap,
} from 'rxjs';
import { ChildsPerState } from '../models/Subscriptor';
import { environment } from '../../environments/environment';
import { ReservationState, WeekVM } from '../models/Interfaces';
import { HttpClient } from '@angular/common/http';
import {
  GetWeeksResponse,
  SumChildsPerStatePayload,
} from 'netlify/models/weekModel';
import {
  Subscription as Inscription,
  SubscriptionInsertInput,
  Week,
} from 'netlify/models/Graphqlx';
import { InsertOneInscriptionResponse } from '../../../netlify/functions/insertOneInscription';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private readonly maxNumberOfReservations: number;

  constructor(private httpClient: HttpClient) {
    this.maxNumberOfReservations = +environment.MAX_NUMBER_OF_RESERVATIONS!;
  }

  insertOneSubscription(
    subscriptionInsertInput: SubscriptionInsertInput
  ): Observable<Inscription> {
    return this.httpClient
      .post<InsertOneInscriptionResponse>(
        `.netlify/functions/insertOneInscription`,
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

  getWeekVMs(year: number): Observable<WeekVM[]> {
    return this.getWeeks(year).pipe((weeks$) => {
      return this.mapWeekCapacity(weeks$);
    });
  }
  getWeeks(year: number): Observable<Week[]> {
    return this.httpClient
      .get<GetWeeksResponse>(`.netlify/functions/getWeeks?year=${year}`)
      .pipe(
        map((result: GetWeeksResponse) => result?.message?.data?.weeks),
        catchError(this.handleError)
      );
  }

  getReservationsPerWeek(week: number): Observable<ChildsPerState[]> {
    return this.httpClient
      .get<SumChildsPerStatePayload>(
        `.netlify/functions/getChildsPerState?week=${week}`
      )
      .pipe(map((payload) => payload?.data?.sumChildsPerState));
  }

  private mapWeekCapacity(weeks$: Observable<Week[]>): Observable<WeekVM[]> {
    return weeks$.pipe(
      mergeMap((arr) => {
        return combineLatest(
          arr.map((week) => {
            return this.getReservationsPerWeek(week.week!).pipe(
              map((participantsPerStates) => {
                return this.mapWeekVM(participantsPerStates, week);
              })
            );
          })
        );
      })
    );
  }

  private mapWeekVM(participantsPerStates: ChildsPerState[], week: Week) {
    let total: number = 0;
    participantsPerStates?.map((participantsPerState) => {
      if (
        participantsPerState.state === ReservationState.TEMPORARY ||
        participantsPerState.state === ReservationState.DEFINITIVE
      ) {
        total += participantsPerState.sumPerStateAndWeek;
      }
    });

    const sumPerWeek = total;
    const freePlacesThisWeek = week.maxParticipants! - total;
    const placesOnWaitingList =
      this.maxNumberOfReservations - freePlacesThisWeek;

    const weekVM: WeekVM = {
      ...week,
      sumPerWeek,
      freePlacesThisWeek,
      placesOnWaitingList,
      participantsPerStates,
    };

    return weekVM;
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
