import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { inscriptionRoutingModule } from './Inscription-routing.module';
import { ReservationComponent } from '../reservations/reservation/reservation.component';
import { WeeklyReservationComponent } from '../reservations/weekly-reservation/weekly-reservation.component';
import { InscriptionComponent } from './inscription/inscription.component';



@NgModule({
  declarations: [
    InscriptionComponent,
    ReservationComponent,
    WeeklyReservationComponent
  ],
  imports: [
    CommonModule,
		inscriptionRoutingModule,
    ReactiveFormsModule
  ]
})
export class inscriptionModule { }
