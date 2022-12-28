import { NgModule } from '@angular/core';
import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationComponent } from './reservation/reservation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CapacityComponent } from './capacity/capacity.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';
import { reservationReducer } from './state/reservation.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ReservationEffects } from "./state/reservation.effects";

@NgModule({
  declarations: [ReservationComponent, CapacityComponent],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    TranslateModule,
    EffectsModule.forFeature([ReservationEffects]),
  ],
  exports: [],
})
export class ReservationsModule {}
