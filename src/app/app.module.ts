import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryCache } from '@apollo/client/core';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { HttpLink } from 'apollo-angular/http';
import { AppComponent } from './app.component';
import { APOLLO_NAMED_OPTIONS, NamedOptions } from 'apollo-angular';
import * as realm from './realm';
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
import { AuthModule } from '@auth0/auth0-angular';
import { authReducer } from './modules/user/state/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './modules/user/state/auth.effects';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import loader from '@angular-devkit/build-angular/src/webpack/plugins/single-test-transform';
import { SafePipe } from './pipes/safe.pipe';

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
    SafePipe,
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
    StoreModule.forRoot({ auth: authReducer }), // State object here like described
    EffectsModule.forRoot([AuthEffects]),

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
    {
      provide: APOLLO_NAMED_OPTIONS, // <-- Different from standard initialization
      useFactory(httpLink: HttpLink): NamedOptions {
        return {
          readAndWriteClient: {
            // <-- this settings will be saved by name: newClientName
            cache: new InMemoryCache(),
            link: httpLink.create({
              uri: realm.graphqlUrlReadWrite,
              headers: new HttpHeaders().set(
                'Authorization',
                `Bearer ${sessionStorage.getItem('tokenReadWrite')}`
              ),
            }),
          },
          writeClient: {
            // <-- this settings will be saved by name: newClientName
            cache: new InMemoryCache(),
            link: httpLink.create({
              uri: realm.graphqlUrl,
              headers: new HttpHeaders().set(
                'Authorization',
                `Bearer ${sessionStorage.getItem('token')}`
              ),
            }),
          },
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
