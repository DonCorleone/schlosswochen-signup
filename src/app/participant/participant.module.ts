import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ParticipantRoutingModule } from './participant-routing.module';
import { ParticipantComponent } from './participant/participant.component';
import { ReactiveFormsModule } from '@angular/forms';
import * as fromParticipant from './state/participant.reducer';

@NgModule({
  declarations: [ParticipantComponent],
  imports: [
    CommonModule,
    ParticipantRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromParticipant.participantsFeatureKey, fromParticipant.participantReducer)
  ]
})
export class ParticipantModule { }
