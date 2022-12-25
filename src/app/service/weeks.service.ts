import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, combineLatest, EMPTY, map, mergeMap, Observable, take } from "rxjs";
import { ChildrenPerStateItem, SumPerWeekAndYear, Week } from "../../../netlify/models/Graphqlx";
import { HttpClient } from '@angular/common/http';
import { SumChildsPerStatePayload } from '../../../netlify/functions/getChildsPerState';
import { Place, ReservationState, WeeklyReservation } from "../models/Interfaces";
import * as InscriptionActions from "../modules/inscription/state/inscription.actions";
import { Store } from "@ngrx/store";
import * as InscriptionReducer from "../modules/inscription/state/inscription.reducer";
import { environment } from "../../environments/environment";
import { WeekCapacity } from "../models/week-capacity";
import { GetWeeksResponse } from "../../../netlify/functions/getWeeks";

@Injectable({
  providedIn: 'root',
})
export class WeeksService {
  private _sumperWeekAndStates = new BehaviorSubject<SumPerWeekAndYear[]>([]);

  public readonly sumperWeekAnsStates: Observable<SumPerWeekAndYear[]> =
    this._sumperWeekAndStates.asObservable();

  private readonly maxNumberOfReservations: number;
  private year: number;
  constructor(
    private httpClient: HttpClient,
    private store: Store<InscriptionReducer.InscriptionState>
  ) {
    this.year = +environment.UPCOMING_YEAR;
    this.maxNumberOfReservations = +environment.MAX_NUMBER_OF_RESERVATIONS!;
    this.loadInitialData();
  }

  loadInitialData() {
    this.httpClient
      .get<SumChildsPerStatePayload>(`/api/getChildsPerState`)
      .pipe(
        map((payload) => {
          this._sumperWeekAndStates.next(payload?.data?.sumChildsPerState);
        }),
        catchError((err) => {
          console.log(`Error retrieving ${err}`);
          return EMPTY;
        })
      );
  }


  mapWeekCapacity(weeks$: Observable<Week[]>): Observable<WeekCapacity[]> {
    return weeks$.pipe(
      mergeMap((arr) => {
        return combineLatest(
          arr.map((week) => {

            return this.sumperWeekAnsStates.pipe(
              map((participantsPerStates) => {

                const sumPerSate: SumPerWeekAndYear[] = participantsPerStates.filter(p => p?.week == week.week && p.year == this.year);
                return this.mapWeekVM(sumPerSate, week);
              })
            );
          })
        );
      })
    );
  }

  private mapWeekVM(participantsPerStates: SumPerWeekAndYear[], week: Week) {
    let total: number = 0;
    participantsPerStates?.map((participantsPerState) => {
      if (
        participantsPerState.state === ReservationState.TEMPORARY ||
        participantsPerState.state === ReservationState.DEFINITIVE
      ) {
        total += participantsPerState.sumPerStateAndWeek ?? 0;
      }
    });

    const sumPerWeek = total;
    const freePlacesThisWeek = week.maxParticipants! - total;
    const placesOnWaitingList =
      this.maxNumberOfReservations - freePlacesThisWeek;

    const weekVM: WeekCapacity = {
      ...week,
      sumPerWeek,
      freePlacesThisWeek,
      placesOnWaitingList,
      participantsPerStates,
    };

    return weekVM;
  }

  getWeekVMs(year: number): Observable<WeekCapacity[]> {
    return this.getWeeks(year).pipe((weeks$) => {
      return this.mapWeekCapacity(weeks$);
    });
  }
  getWeeks(year: number): Observable<Week[]> {
    return this.httpClient
      .get<GetWeeksResponse>(`/api/getWeeks?year=${year}`)
      .pipe(
        map((result: GetWeeksResponse) => result?.message?.data?.weeks),
        catchError(this.handleError)
      );
  }

  get(): Observable<Week[]> {
    return this.httpClient
      .get<GetWeeksResponse>(`/api/getWeeks?year=${environment.UPCOMING_YEAR}`)
      .pipe(
        map((result: GetWeeksResponse) => result?.message?.data?.weeks),
        catchError(this.handleError)
      );
  }

  setPlaces(weeklyReservation: WeeklyReservation) {
    let sumParticipants = 0;
    this.sumperWeekAnsStates
      .pipe(
        take(1),
        map (x => x.filter(p => weeklyReservation.week?.week! && p.year == this.year))
      )
      .subscribe((sumChildsPerState) => {
        sumChildsPerState?.map((p) => {
          if (
            p.state === ReservationState.DEFINITIVE ||
            p.state === ReservationState.TEMPORARY
          ) {
            sumParticipants += p.sumPerStateAndWeek ?? 0;
          }
        });

        let places: Place[] = [];
        for (
          let i = sumParticipants - weeklyReservation.numberOfReservations + 1;
          i <= sumParticipants;
          i++
        ) {
          places.push({
            placeNumber: i,
            reservationState: weeklyReservation.state,
          });
        }

        this.store.dispatch(InscriptionActions.setPlaces({ places: places }));
      });
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
