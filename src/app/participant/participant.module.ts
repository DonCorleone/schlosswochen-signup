import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipantRoutingModule } from './participant-routing.module';
import { ParticipantComponent } from './participant/participant.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ParticipantComponent],
  imports: [
    CommonModule,
    ParticipantRoutingModule,
    ReactiveFormsModule
  ]
})
export class ParticipantModule { }
