import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SubscriptionsRoutingModule } from './subscription-routing.module';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import * as fromState from './state/subscription.reducer';

@NgModule({
  declarations: [
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
		SubscriptionsRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromState.subscriptionFeatureKey, fromState.subscriptionReducer),
  ]
})
export class SubscriptionsModule { }
