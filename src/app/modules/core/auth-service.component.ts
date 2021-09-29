import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';

import { UserManager, User, SignoutResponse } from 'oidc-client';

import { Constants } from '../../constants';
import { CoreModule } from './core.module';
import { AuthContext } from '../../models/auth-context';

@Injectable()
export class AuthService {
  private _userManager: UserManager;
  private _user: User | null;
  private _loginChangedSubject = new Subject<boolean>();

  loginChanged = this._loginChangedSubject.asObservable();
  authContext: AuthContext;

  constructor(private _httpClient: HttpClient) {
    const stsSettings = {
      authority: Constants.stsAuthority,
      client_id: Constants.clientId,
      redirect_uri: `${Constants.clientRoot}signin-callback`,
      scope: 'openid profile schlosswochen-api',
      response_type: 'code',
      post_logout_redirect_uri: `${Constants.clientRoot}signout-callback`,
      automaticSilentRenew: true,
      silent_redirect_uri: `${Constants.clientRoot}assets/silent-callback.html`,
      metadata: {
        issuer: `${Constants.stsAuthority}`,
        authorization_endpoint: `${Constants.stsAuthority}authorize?audience=schlosswochen-api`,
        jwks_uri: `${Constants.stsAuthority}.well-known/jwks.json`,
        token_endpoint: `${Constants.stsAuthority}oauth/token`,
        userinfo_endpoint: `${Constants.stsAuthority}userinfo`,
        end_session_endpoint: `${Constants.stsAuthority}v2/logout?client_id=${Constants.clientId}&returnTo=${encodeURI(Constants.clientRoot)}signout-callback`
      }
    };
    this._userManager = new UserManager(stsSettings);
    this._userManager.events.addAccessTokenExpired(_ => {
      this._loginChangedSubject.next(false);
    });
    this._userManager.events.addUserLoaded(user => {
      if (this._user !== user) {
        this._user = user;
       // this.loadSecurityContext();
        this._loginChangedSubject.next(!!user && !user.expired);
      }
    });

  }

  login(): Promise<void> {
    return this._userManager.signinRedirect();
  }

  isLoggedIn(): Promise<boolean> {
    return this._userManager.getUser().then(user => {
      const userCurrent = !!user && !user.expired;
      if (this._user !== user) {
        this._loginChangedSubject.next(userCurrent);
      }
      // if (userCurrent && !this.authContext) {
      //   this.loadSecurityContext();
      // }
      this._user = user;
      return userCurrent;
    });
  }

  completeLogin(): Promise<User> {
    return this._userManager.signinRedirectCallback().then(user => {
      this._user = user;
      this._loginChangedSubject.next(!!user && !user.expired);
      return user;
    });
  }

  logout():void {
    this._userManager.signoutRedirect();
  }

  completeLogout(): Promise<SignoutResponse> {
    this._user = null;
    this._loginChangedSubject.next(false);
    return this._userManager.signoutRedirectCallback();
  }

  getAccessToken(): Promise<String | null> {
    return this._userManager.getUser().then(user => {
      if (!!user && !user.expired) {
        return user.access_token;
      }
      else {
        return null;
      }
    });
  }

  // loadSecurityContext(): void {
  //   this._httpClient
  //     .get<AuthContext>(`${Constants.apiRoot}Projects/AuthContext`)
  //     .subscribe(
  //       context => {
  //         this.authContext = new AuthContext();
  //         this.authContext.claims = context.claims;
  //         this.authContext.userProfile = context.userProfile;
  //       },
  //       error => console.error(error)
  //     );
  // }

}
