import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(private readonly router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const req = this.setHeader(request);

    return next.handle(req).pipe(
      catchError((error) => {
        this.handleUnauthorizedRequests(error);
        return throwError(() => error);
      })
    );
  }

  private setHeader(request: HttpRequest<unknown>): HttpRequest<unknown> {
    const token: string | null = localStorage.getItem('token');
    if (token) {
      return request.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      });
    }
    return request;
  }

  private handleUnauthorizedRequests(error: Error) {
    if (error instanceof HttpErrorResponse
      && error.status === HttpStatusCode.Unauthorized
      && !this.router.url.includes('authentication')) {
      this.router.navigate(['authentication/login']);
    }
  }
}
