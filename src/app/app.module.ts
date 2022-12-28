import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';
import { PageNotFoundComponent } from './home/page-not-found.component';
import { ShellComponent } from './home/shell.component';
import { WelcomeComponent } from './home/welcome.component';
import { CoreModule } from './modules/core/core.module';
import { SigninRedirectCallbackComponent } from './home/signin-redirect-callback.component';
import { SignoutRedirectCallbackComponent } from './home/signout-redirect-callback.component';
import { UnauthorizedComponent } from './home/unauthorized.component';
import { SharedModule } from './modules/shared/shared.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { AuthModule, AuthState } from "@auth0/auth0-angular";
import { authReducer } from './modules/user/state/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoadingIndicatorInterceptor } from './interceptor/loading-indicator.interceptor';
import { LoadingIndicatorService } from './service/loading-indicator.service';
import { appReducer } from "./shared/store/app.reducer";
import { reservationReducer } from "./modules/reservations/state/reservation.reducer";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    SigninRedirectCallbackComponent,
    SignoutRedirectCallbackComponent,
    UnauthorizedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    TranslateModule.forRoot({
      defaultLanguage: 'de',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    StoreModule.forRoot({ appState: appReducer, reservationState: reservationReducer, auth: authReducer }),
    EffectsModule.forRoot([]),

    StoreDevtoolsModule.instrument({
      name: 'Schlosswochen Inscription',
      maxAge: 25,
      logOnly: environment.production,
    }),
    AuthModule.forRoot({
      domain: 'dev-zgesjpx3.us.auth0.com',
      clientId: 'oLf1CMEnJpsEEpvuLh91c2ilU7HuGmrD',
      redirectUri: window.location.origin,
    }),
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyBootstrapModule,
  ],
  providers: [
    LoadingIndicatorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingIndicatorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
