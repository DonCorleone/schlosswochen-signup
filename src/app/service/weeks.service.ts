import { Injectable } from '@angular/core';
import {
  catchError,
  map,
  Observable,
} from 'rxjs';
import { Week_Capacity } from '../../../netlify/models/Graphqlx';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { WeekCapacityCalculated } from '../models/week-capacity-calculated';
import { State } from '../modules/reservations/state/reservation.reducer';
import { ReservationState } from '../models/reservation-state';
import { GetWeeksCapacityResponse } from '../../../netlify/functions/getWeeks';

@Injectable({
  providedIn: 'root',
})
export class WeeksService {
  private readonly maxNumberOfReservations: number;
  private readonly year: number;
  constructor(private httpClient: HttpClient, private store: Store) {
    this.year = +environment.UPCOMING_YEAR;
    this.maxNumberOfReservations = +environment.MAX_NUMBER_OF_RESERVATIONS!;
  }

  mapWeekCapacity(
    stateObservable: Observable<State>
  ): Observable<WeekCapacityCalculated[]> {
    return stateObservable.pipe(
      map((x) => {
        return x.weeks?.map((week) => {
          const x = this.mapWeekVM(week);
          return x;
        });
      })
    );
  }

  private mapWeekVM(week: Week_Capacity) {
    let total: number = 0;
    week?.capacity?.map((participantsPerState) => {
      if (
        participantsPerState?.state === ReservationState.TEMPORARY ||
        participantsPerState?.state === ReservationState.DEFINITIVE
      ) {
        total += participantsPerState.sumPerStateAndWeek ?? 0;
      }
    });

    const sumPerWeek = total;
    const freePlacesThisWeek = week.maxParticipants! - total;
    const placesOnWaitingList =
      this.maxNumberOfReservations - freePlacesThisWeek;

    const weekVM: WeekCapacityCalculated = {
      ...week,
      sumPerWeek,
      freePlacesThisWeek,
      placesOnWaitingList,
    };

    return weekVM;
  }

  get(): Observable<Week_Capacity[]> {
    return this.httpClient
      .get<GetWeeksCapacityResponse>(
        `/api/getWeeks?year=${environment.UPCOMING_YEAR}`
      )
      .pipe(
        map(
          (result: GetWeeksCapacityResponse) =>
            result?.message?.data.week_capacities
        ),
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
