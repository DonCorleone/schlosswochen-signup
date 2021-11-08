import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccountService } from './account.service';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import {AuthenticationService} from "../../service/auth.service";
@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        AuthenticationService,
        AccountService,
       // AdminRouteGuard,
   { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }
    ],
})
export class CoreModule { }
