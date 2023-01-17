import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InscriptionsService } from '../service/inscriptions.service';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectCurrentUserProfile } from '../modules/user/state/auth.selectors';
import {SubscriptionQueryInput, SubscriptionUpdateInput} from "../../../netlify/models/Graphqlx";

@Component({
  selector: 'app-signin-callback',
  template: `<div></div>`,
})
export class SigninRedirectCallbackComponent implements OnInit, OnDestroy {
  private subExIdSubscription: Subscription;
  private partExIdSubscription: Subscription;
  private profileSubscription: Subscription;

  constructor(
    private inscriptionsService: InscriptionsService,
    private store: Store<any>,
    private router: Router
  ) {}

  ngOnInit() {
    const inscriptionId = sessionStorage.getItem('inscription');
    const participantJson = sessionStorage.getItem('participants');
    if (!participantJson) {
      this.router.navigate(['/welcome']).then();
      return;
    }

    const participantArray: string[] = JSON.parse(participantJson);

    if (inscriptionId) {
      this.profileSubscription = this.store
        .pipe(select(selectCurrentUserProfile))
        .subscribe((x) => {
          const varQuery: Partial<SubscriptionQueryInput> = {
            _id: inscriptionId
          };
          const varSet: Partial<SubscriptionUpdateInput> = {
            externalUserId: x.sub
          };

          this.subExIdSubscription = this.inscriptionsService
            .updateOneSubscription(varQuery, varSet)
            .subscribe((subscriptionResult) => {
/*              this.partExIdSubscription = this.participantService
                .updateExternalUserId(participantArray, x.sub)
                .subscribe((participantResult) => {
                  if (participantResult == participantArray.length) {
                    this.router.navigate(['/welcome']).then();
                  }
                });*/
            });
        });
    }
    this.router.navigate(['/welcome']).then();
  }

  ngOnDestroy(): void {
    console.log('SigninRedirectCallbackComponent destroyed');
    this.profileSubscription?.unsubscribe();
    this.partExIdSubscription?.unsubscribe();
    this.subExIdSubscription?.unsubscribe();
  }
}
