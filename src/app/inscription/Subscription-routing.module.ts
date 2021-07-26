import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SubscriptionComponent } from '../components/subscription/subscription.component';
import { ReservationComponent } from '../reservations/reservation/reservation.component';

const routes: Routes = [
  {path: '', component: ReservationComponent},
  {path: 'subscription/:id/:week/:numOfChilds/:deadlineMs', component: SubscriptionComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class inscriptionRoutingModule {
}
