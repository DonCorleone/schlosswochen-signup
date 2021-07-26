import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationComponent } from './reservation/reservation.component';
import { WeeklyReservationComponent } from './weekly-reservation/weekly-reservation.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReservationComponent,
    WeeklyReservationComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReservationsModule { }
