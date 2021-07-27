import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryCache } from '@apollo/client/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ApolloClientOptions } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { AppComponent } from './app.component';
import { APOLLO_OPTIONS } from 'apollo-angular';
import * as realm from './realm';
import { GraphQLModule } from './graphql.module';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

const uri = realm.graphqlUrl;

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
	return {
		link: httpLink.create({
			uri,
			headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)
		}),
		cache: new InMemoryCache()
	};
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {})
  ],
	providers: [
		{
			provide: APOLLO_OPTIONS,
			useFactory: createApollo,
			deps: [HttpLink]
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
