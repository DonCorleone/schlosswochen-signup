import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriptionRoutingModule } from './inscription-routing.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    InscriptionComponent
  ],
  imports: [
    CommonModule,
		InscriptionRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('inscriptions', {}) //inscriptionsReducer
  ]
})
export class InscriptionModule { }
