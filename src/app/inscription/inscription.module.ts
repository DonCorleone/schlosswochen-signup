import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from '../components/subscription/subscription.component';
import { ReactiveFormsModule } from '@angular/forms';
import { inscriptionRoutingModule } from './Subscription-routing.module';
import { InitComponent } from '../components/init/init.component';
import { inscriptionComponent } from './inscription/inscription.component';
import { WeeklyReservationComponent } from '../reservations/weekly-reservation/weekly-reservation.component';



@NgModule({
  declarations: [
    inscriptionComponent,
    SubscriptionComponent,
    InitComponent,
    WeeklyReservationComponent
  ],
  imports: [
    CommonModule,
		inscriptionRoutingModule,
    ReactiveFormsModule
  ]
})
export class inscriptionModule { }
