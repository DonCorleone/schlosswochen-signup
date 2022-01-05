import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { ParticipantComponent } from './participant/participant.component';
import { FinnishComponent } from './finnish/finnish.component';

const routes: Routes = [
  { path: 'inscription/:id', component: InscriptionComponent },
  { path: 'participant', component: ParticipantComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'finnish', component: FinnishComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionRoutingModule {}
