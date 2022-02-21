import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { ChildsPerState } from 'src/app/models/Subscriptor';
import { ReservationService } from 'src/app/service/reservation.service';
import {Week} from "../../../models/Graphqlx";

@Component({
  selector: 'app-capacity',
  templateUrl: './capacity.component.html',
  styleUrls: ['./capacity.component.scss'],
})
export class CapacityComponent implements OnInit {
  @Input() week: Week;

  sumPerWeek = 0;

  childsPerStates$: Observable<ChildsPerState[]> | undefined;

  constructor(private reservationService: ReservationService) {}

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
          })
        );
    }
  }
}
