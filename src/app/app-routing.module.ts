import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealmAuthGuard } from './realm-auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './home/page-not-found.component';
import { WelcomeComponent } from './home/welcome.component';
import { ShellComponent } from './home/shell.component';
import { SigninRedirectCallbackComponent } from './home/signin-redirect-callback.component';
import { SignoutRedirectCallbackComponent } from './home/signout-redirect-callback.component';
import { UnauthorizedComponent } from './home/unauthorized.component';
import { RealmAuthGuardReadWrite } from './realm-auth-readwrite.guard';

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
        loadChildren: () => import('./modules/subscription/subscription.module').then(m => m.SubscriptionsModule),
        canActivate: [RealmAuthGuard]
      },
      {
        path: 'participant', // ToDo subscription
        loadChildren: () => import('./modules/participant/participant.module').then(m => m.ParticipantModule),
        canActivate: [RealmAuthGuard]
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    ]
  },
  { path: 'signin-callback', component: SigninRedirectCallbackComponent },
  { path: 'signout-callback', component: SignoutRedirectCallbackComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
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
