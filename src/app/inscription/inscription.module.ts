import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriptionRoutingModule } from './Inscription-routing.module';

@NgModule({
  declarations: [
    InscriptionComponent
  ],
  imports: [
    CommonModule,
		InscriptionRoutingModule,
    ReactiveFormsModule
  ]
})
export class InscriptionModule { }
