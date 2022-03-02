import { Component, Input, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ChildsPerState } from 'src/app/models/Subscriptor';
import { ReservationService } from 'src/app/service/reservation.service';
import { Week } from '../../../models/Graphqlx';
import { environment } from '../../../../environments/environment.custom';

@Component({
  selector: 'app-capacity',
  templateUrl: './capacity.component.html',
  styleUrls: ['./capacity.component.scss'],
})
export class CapacityComponent implements OnInit {
  @Input() week: Week;

  sumPerWeek = 0;

  childsPerStates$: Observable<ChildsPerState[]> | undefined;
  maxNumberOfReservations = 1;
  freePlacesThisWeek = 0;
  placesOnWaitingList = 0;

  constructor(private reservationService: ReservationService) {
    this.maxNumberOfReservations = +environment.MAX_NUMBER_OF_RESERVATIONS!;
  }

  ngOnInit(): void {
    if (this.week?.week) {
      this.childsPerStates$ = this.reservationService
        .getReservationsPerWeek(this.week.week)
        .pipe(
          tap((participantsPerStates) => {
            let total: number = 0;
            participantsPerStates.map((participantsPerState) => {
              total += participantsPerState.sumPerStateAndWeek;
            });

            this.sumPerWeek = total;
            this.freePlacesThisWeek = this.week.maxParticipants! - total;
            this.placesOnWaitingList =
              this.maxNumberOfReservations - this.freePlacesThisWeek;
          })
        );
    }
  }
}
