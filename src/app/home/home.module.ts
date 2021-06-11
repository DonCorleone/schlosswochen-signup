import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SubscriptionComponent } from '../components/subscription/subscription.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
		HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
