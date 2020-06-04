import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { StateService } from './../services/state.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class InTransitInterceptor implements HttpInterceptor {

  constructor(private state: StateService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.state.addUrl(request.url);
    return next.handle(request).pipe(
      finalize(() => this.state.removeUrl(request.url))
    );
    // return next.handle(request)
  }
}
