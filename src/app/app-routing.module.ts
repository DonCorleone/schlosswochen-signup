import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealmAuthGuard } from './realm-auth.guard';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./reservations/reservations.module').then(m => m.ReservationsModule),
    canActivate: [RealmAuthGuard]
  },
  {
    path: 'inscriptions', // ToDo inscription
    loadChildren: () => import('./inscriptions/inscriptions.module').then(m => m.InscriptionsModule)
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
