import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionComponent } from './subscription/subscription.component';

const routes: Routes = [
  { path: ':id', component: SubscriptionComponent },
  { path: '', component: SubscriptionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionsRoutingModule {
}
