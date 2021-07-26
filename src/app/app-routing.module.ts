import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealmAuthGuard } from './realm-auth.guard';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [	{
    path: '',
    loadChildren: () => import('./inscription/inscription.module').then(m => m.inscriptionModule),
    canActivate: [RealmAuthGuard]
  }
]

@NgModule({
	imports: [
    CommonModule,
    RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})
  ],
	exports: [RouterModule]
})
export class AppRoutingModule { }
