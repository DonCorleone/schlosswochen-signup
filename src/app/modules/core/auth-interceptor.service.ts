// import {
//   HttpEvent,
//   HttpHandler,
//   HttpHeaders,
//   HttpInterceptor,
//   HttpRequest,
//   HttpErrorResponse,
// } from '@angular/common/http';
// import { core } from '@angular/compiler';
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { from, Observable } from 'rxjs';
// import { map, tap } from 'rxjs/operators';
// import { Constants } from 'src/app/constants';
// import { CoreModule } from './core.module';
// import { AuthenticationService } from '../../service/auth.service';
//
// @Injectable()
// export class AuthInterceptorService implements HttpInterceptor {
//   constructor(
//     private _authService: AuthenticationService,
//     private _router: Router
//   ) {}
//
//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     if (req.url.startsWith(Constants.apiRoot)) {
//       this._authService.getToken$().pipe(
//         map((token) => {
//           //
//           const headers = new HttpHeaders().set(
//             'Authorization',
//             `Bearer ${token}`
//           );
//           const authReq = req.clone({ headers });
//           return next
//             .handle(authReq)
//             .pipe(
//               tap(
//                 (_) => {},
//                 (error) => {
//                   var respError = error as HttpErrorResponse;
//                   if (
//                     respError &&
//                     (respError.status === 401 || respError.status === 403)
//                   ) {
//                     this._router.navigate(['/unauthorized']).then();
//                   }
//                 }
//               )
//             )
//
//         })
//       );
//     } else {
//       return next.handle(req);
//     }
//   }
// }
