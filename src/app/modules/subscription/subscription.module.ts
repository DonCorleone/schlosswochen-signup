import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import * as fromState from './state/subscription.reducer';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ReservationsModule } from '../reservations/reservations.module';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SubscriptionsRoutingModule } from './subscription-routing.module';

@NgModule({
  declarations: [
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
		SubscriptionsRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    ReservationsModule,
    SharedModule,
    StoreModule.forFeature(fromState.subscriptionFeatureKey, fromState.subscriptionReducer),
  ]
})
export class SubscriptionsModule { }
