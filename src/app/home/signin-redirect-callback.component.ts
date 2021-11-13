import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantService } from '../service/participant.service';
import { InscriptionsService } from '../service/inscriptions.service';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectCurrentUserProfile } from '../modules/user/state/auth.selectors';

@Component({
  selector: 'app-signin-callback',
  template: `<div></div>`,
})
export class SigninRedirectCallbackComponent implements OnInit {
  private subExIdSubscription: Subscription;
  private profile$: Observable<any>;
  private partExIdSubscription: Subscription;

  constructor(
    private participantService: ParticipantService,
    private inscriptionsService: InscriptionsService,
    private store: Store<any>,
    private router: Router
  ) {}

  ngOnInit() {
    const inscriptionId = sessionStorage.getItem('inscription');
    const participantJson = sessionStorage.getItem('participants');
    if (!participantJson){
      this.router.navigate(['/welcome']).then();
      return;
    }

    const participantArray: string[] = JSON.parse(participantJson);

    this.profile$ = this.store.pipe(select(selectCurrentUserProfile));

    if (inscriptionId) {

      this.profile$.subscribe(x=>{
        this.subExIdSubscription = this.inscriptionsService
          .updateExternalUserId(inscriptionId, x.sub)
          .subscribe((subscriptionResult) => {
            this.partExIdSubscription = this.participantService
              .updateExternalUserId(
                participantArray,
                x.sub
              )
              .subscribe((participantResult) => {
                if (participantResult == participantArray.length) {
                  this.router.navigate(['/welcome']).then();
                }
              });
          });
      });
    }
    this.router.navigate(['/welcome']).then();
  }
}
