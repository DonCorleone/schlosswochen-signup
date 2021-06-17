import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SubscriptionComponent } from '../components/subscription/subscription.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { InitComponent } from '../components/init/init.component';
import { WeeklySubscriptionsComponent } from '../components/weekly-subscriptions/weekly-subscriptions.component';



@NgModule({
  declarations: [
    HomeComponent,
    SubscriptionComponent,
    InitComponent,
    WeeklySubscriptionsComponent
  ],
  imports: [
    CommonModule,
		HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
