import { TestBed } from '@angular/core/testing';

import { HttpErrorResponse, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { AuthorizationInterceptor } from './authorization.interceptor';


describe('AuthorizationInterceptor', () => {
  const httpHandlerSpy: jasmine.SpyObj<HttpHandler> = jasmine.createSpyObj(HttpHandler, ['handle']);
  let routerSpy: Router;
  let interceptor: AuthorizationInterceptor;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    providers: [
      AuthorizationInterceptor,
    ]
  }));

  beforeEach(() => {
    interceptor = TestBed.inject(AuthorizationInterceptor);
    routerSpy = TestBed.inject(Router);
    localStorage.clear();
  })

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should set the authentication Header in the request', () => {
    const request: HttpRequest<unknown> = new HttpRequest("GET", "testURL")
    const expectedRequest = request.clone({
      setHeaders: {
        authorization: 'Bearer token'
      }
    });

    localStorage.setItem('token', 'token');
    httpHandlerSpy.handle.and.callFake(() => of(new HttpResponse()));

    interceptor.intercept(request, httpHandlerSpy);

    expect(httpHandlerSpy.handle).toHaveBeenCalledWith(expectedRequest);
  })

  it('should not set the authentication Header in the request', () => {
    const request: HttpRequest<unknown> = new HttpRequest("GET", "testURL")

    httpHandlerSpy.handle.and.callFake(() => of(new HttpResponse()));

    interceptor.intercept(request, httpHandlerSpy);

    expect(httpHandlerSpy.handle).toHaveBeenCalledWith(request);
  })

  it('should navigate to the login route', () => {
    spyOn(routerSpy, 'navigate');
    const request: HttpRequest<unknown> = new HttpRequest("GET", "testURL")
    const payload = { status: 401 };
    const response = new HttpErrorResponse(payload);

    httpHandlerSpy.handle.and.returnValue(throwError(() => response));

    interceptor.intercept(request, httpHandlerSpy).subscribe({
      next: (v) => { },
      error: (e) => { }
    });

    expect(routerSpy.navigate).toHaveBeenCalledWith(['authentication/login']);
  })

  it('should not navigate to the login route', () => {
    spyOn(routerSpy, 'navigate');
    const request: HttpRequest<unknown> = new HttpRequest("GET", "testURL")
    const payload = { status: 404 };
    const response = new HttpErrorResponse(payload);

    httpHandlerSpy.handle.and.returnValue(throwError(() => response));

    interceptor.intercept(request, httpHandlerSpy).subscribe({
      next: (v) => { },
      error: (e) => { }
    });

    expect(routerSpy.navigate).not.toHaveBeenCalled();
  })
});
