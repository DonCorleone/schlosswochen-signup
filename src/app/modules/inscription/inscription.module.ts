import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ReservationsModule } from '../reservations/reservations.module';
import { InscriptionRoutingModule } from './inscription-routing.module';
import { InscriptionComponent } from './inscription/inscription.component';
import { ParticipantComponent } from './participant/participant.component';
import { FinnishComponent } from './finnish/finnish.component';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from "@ngrx/store";
import { inscriptionReducer } from "./state/inscription.reducer";
import { EffectsModule } from "@ngrx/effects";
import { InscriptionsEffects } from "./state/inscription.effects";

@NgModule({
  declarations: [InscriptionComponent, ParticipantComponent, FinnishComponent],
  imports: [
    CommonModule,
    InscriptionRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,

    StoreModule.forFeature('myReservation', inscriptionReducer),
    EffectsModule.forFeature([InscriptionsEffects]),
    ReservationsModule,
    SharedModule,
    TranslateModule,
  ],
})
export class InscriptionModule {}
