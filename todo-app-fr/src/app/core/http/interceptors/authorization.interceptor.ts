import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpStatusCode
} from '@angular/common/http';
import { Observable, catchError, of, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(private readonly router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status === HttpStatusCode.Unauthorized) {
          this.router.navigate(['authentication/login']);
        }
        return of(error);
      })
    );
  }
}
