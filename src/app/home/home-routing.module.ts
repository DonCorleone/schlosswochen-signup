import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { InitComponent } from '../components/init/init.component';
import { SubscriptionComponent } from '../components/subscription/subscription.component';

const routes: Routes = [
  {path: '', component: InitComponent},
  {path: 'subscription/:id/:week/:numOfChildren', component: SubscriptionComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomeRoutingModule {
}
