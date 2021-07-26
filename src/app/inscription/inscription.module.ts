import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from '../components/subscription/subscription.component';
import { ReactiveFormsModule } from '@angular/forms';
import { inscriptionRoutingModule } from './Subscription-routing.module';
import { InitComponent } from '../components/init/init.component';
import { WeeklySubscriptionsComponent } from '../components/weekly-subscriptions/weekly-subscriptions.component';
import { inscriptionComponent } from './inscription/inscription.component';



@NgModule({
  declarations: [
    inscriptionComponent,
    SubscriptionComponent,
    InitComponent,
    WeeklySubscriptionsComponent
  ],
  imports: [
    CommonModule,
		inscriptionRoutingModule,
    ReactiveFormsModule
  ]
})
export class inscriptionModule { }
