import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriptionsRoutingModule } from './inscriptions-routing.module';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    InscriptionComponent
  ],
  imports: [
    CommonModule,
		InscriptionsRoutingModule,
    ReactiveFormsModule,
   // StoreModule.forFeature('inscriptions', {inscriptionsReducer}) //inscriptionsReducer
  ]
})
export class InscriptionsModule { }
