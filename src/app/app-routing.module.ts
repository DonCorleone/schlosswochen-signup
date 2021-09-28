import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealmAuthGuard } from './realm-auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantModule } from './modules/participant/participant.module';
import { PageNotFoundComponent } from './home/page-not-found.component';
import { WelcomeComponent } from './home/welcome.component';
import { ShellComponent } from './home/shell.component';

const routes: Routes =
[
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'reservation',
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
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
