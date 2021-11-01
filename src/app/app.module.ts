import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryCache } from '@apollo/client/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { HttpLink } from 'apollo-angular/http';
import { AppComponent } from './app.component';
import { APOLLO_NAMED_OPTIONS, NamedOptions } from 'apollo-angular';
import * as realm from './realm';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';
import { MenuComponent } from './home/menu.component';
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
import { UserModule } from './modules/user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    MenuComponent,
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
    UserModule,
    SharedModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      name: 'Schlosswochen Subscription',
      maxAge: 25,
      logOnly: environment.production,
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
                `Bearer ${localStorage.getItem('tokenReadWrite')}`
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
                `Bearer ${localStorage.getItem('token')}`
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
