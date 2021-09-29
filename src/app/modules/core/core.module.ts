import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
// import { AuthService } from './auth-service.component';
import { AccountService } from './account.service';
import { AuthService } from './auth-service.component';
//import { AdminRouteGuard } from './admin-route-guard';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        AuthService,
        AccountService,
       // AdminRouteGuard,
   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
    ],
})
export class CoreModule { }
