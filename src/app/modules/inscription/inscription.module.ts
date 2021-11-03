import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import * as fromState from './state/inscription.reducer';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ReservationsModule } from '../reservations/reservations.module';
import { InscriptionRoutingModule } from './inscription-routing.module';
import { InscriptionComponent } from './inscription/inscription.component';

@NgModule({
  declarations: [InscriptionComponent],
  imports: [
    CommonModule,
    InscriptionRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    ReservationsModule,
    SharedModule,
    StoreModule.forFeature(
      fromState.inscriptionFeatureKey,
      fromState.inscriptionReducer
    ),
  ],
})
export class InscriptionModule {}
