import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingIndicatorService } from '../service/loading-indicator.service';

@Injectable()
export class LoadingIndicatorInterceptor implements HttpInterceptor {
  constructor(
    private readonly loadingIndicatorService: LoadingIndicatorService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingIndicatorService.start();
    return (
      next
        .handle(request)
        // Stops the loading indicator when the HTTP call get cancelled, completes or throws an error
        .pipe(finalize(() => this.loadingIndicatorService.stop()))
    );
  }
}
