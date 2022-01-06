import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { AuthenticationService } from '../../service/auth.service';
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AuthenticationService,
    // AdminRouteGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
})
export class CoreModule {}
