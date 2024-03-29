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

@NgModule({
  declarations: [InscriptionComponent, ParticipantComponent, FinnishComponent],
  imports: [
    CommonModule,
    InscriptionRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    ReservationsModule,
    SharedModule,
    TranslateModule,
  ],
})
export class InscriptionModule {}
