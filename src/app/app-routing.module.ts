import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealmAuthGuard } from './realm-auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantModule } from './modules/participant/participant.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/reservations/reservations.module').then(m => m.ReservationsModule),
    canActivate: [RealmAuthGuard]
  },
  {
    path: 'subscriptions', // ToDo subscription
    loadChildren: () => import('./modules/subscription/subscription.module').then(m => m.SubscriptionsModule)
  },
  {
    path: 'participant', // ToDo subscription
    loadChildren: () => import('./modules/participant/participant.module').then(m => m.ParticipantModule)
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
