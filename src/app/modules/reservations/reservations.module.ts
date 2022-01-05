import { NgModule } from '@angular/core';
import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationComponent } from './reservation/reservation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromState from './state/reservation.reducer';
import { CapacityComponent } from './capacity/capacity.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ReservationComponent,
    CapacityComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature(
      fromState.reservationFeatureKey,
      fromState.reservationReducer
    ),
    TranslateModule,
  ],
  exports: [],
})
export class ReservationsModule {}
