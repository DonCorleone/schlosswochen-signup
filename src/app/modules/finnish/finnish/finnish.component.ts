import { Component, OnInit } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import * as ParticipantReducer from '../../participant/state/participant.reducer';
import * as SubscriptionReducer from '../../subscription/state/subscription.reducer';
import { Router } from '@angular/router';
import { Participant } from '../../../models/Graphqlx';
import { Subscription as Inscription } from 'src/app/models/Graphqlx';

@Component({
  selector: 'app-finnish',
  templateUrl: './finnish.component.html',
  styleUrls: ['./finnish.component.scss'],
})
export class FinnishComponent implements OnInit {
  public title = 'Finnished';
  public participants: Observable<Dictionary<Participant>>;
  public subscription: Observable<Inscription>;

  constructor(
    private router: Router,
    private subscriptionStore: Store<SubscriptionReducer.State>,
    private participantStore: Store<ParticipantReducer.State>
  ) {}

  ngOnInit(): void {
    this.subscription = this.subscriptionStore
      .select(SubscriptionReducer.getSubscription)
      .pipe(
        map((x) => {
          return x;
        })
      );
    this.participants = this.participantStore
      .select(ParticipantReducer.getAllParticipants)
      .pipe(
        map((x) => {
          return x;
        })
      );
  }

  goToPreviousStep() {}

  goToNextStep(): void {
    this.router.navigate(['/subscriptions']);
  }
}
