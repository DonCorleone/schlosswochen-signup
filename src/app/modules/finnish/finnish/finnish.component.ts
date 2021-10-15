import { Component, OnInit } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Participant } from 'src/app/models/Participant';

import * as ParticipantReducer from '../../participant/state/participant.reducer';

@Component({
  selector: 'app-finnish',
  templateUrl: './finnish.component.html',
  styleUrls: ['./finnish.component.scss']
})
export class FinnishComponent implements OnInit {

  public title = 'Finnished';
  public content: Observable<Dictionary<Participant>>;

  constructor(
    private store: Store<ParticipantReducer.State>) { }

  ngOnInit(): void {
    this.content = this.store.select(ParticipantReducer.getAllParticipants).pipe(map(x => {
      return x;
    }));
  }

  goToPreviousStep() {
  }

  goToNextStep(): void {
  }
}
