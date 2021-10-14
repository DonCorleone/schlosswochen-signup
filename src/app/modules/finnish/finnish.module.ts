import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinnishComponent } from './finnish/finnish.component';
import { SharedModule } from '../shared/shared.module';
import { FinnishRoutingModule } from './finnish-routing.module';



@NgModule({
  declarations: [
    FinnishComponent
  ],
  imports: [
    FinnishRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class FinnishModule { }
