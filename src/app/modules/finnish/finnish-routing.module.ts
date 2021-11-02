import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinnishComponent } from './finnish/finnish.component';

const routes: Routes = [
  { path: '', component: FinnishComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinnishRoutingModule { }
