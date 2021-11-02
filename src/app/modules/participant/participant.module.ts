import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ParticipantRoutingModule } from './participant-routing.module';
import { ParticipantComponent } from './participant/participant.component';
import { ReactiveFormsModule } from '@angular/forms';
import * as fromState from './state/participant.reducer';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ReservationsModule } from '../reservations/reservations.module';

@NgModule({
  declarations: [ParticipantComponent],
  imports: [
    CommonModule,
    ParticipantRoutingModule,
    ReactiveFormsModule,
    ReservationsModule,
    SharedModule,
    StoreModule.forFeature(fromState.participantsFeatureKey, fromState.participantReducer)
  ]
})
export class ParticipantModule { }
