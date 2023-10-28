import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthorizationService } from 'src/app/core/http/services/authorization/authorization.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StandardButtonComponent } from 'src/app/shared/standard-button/standard-button.component';
import { TextInputComponent } from 'src/app/shared/text-input/text-input.component';
import { RouterTestingModule } from '@angular/router/testing';
import { credentialsMock } from 'src/assets/test/model/credentials.mock';
import { Router } from '@angular/router';
import { asyncError } from 'src/assets/test/utils/async_error';
import { HttpErrorResponse } from '@angular/common/http';
import { loginGenericErrorMessage } from 'src/app/core/constants/app.constants';
import { authMock } from 'src/assets/test/model/auth.mock';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthorizationService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule, TextInputComponent, StandardButtonComponent, RouterTestingModule],
      providers: [AuthorizationService]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthorizationService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return if the form is valid or not', () => {
    component.loginForm.setValue(credentialsMock);
    component.loginForm.updateValueAndValidity();

    expect(component.validForm).toBeTrue();
  });


  it('should return if the form is valid or not', () => {
    component.loginForm.setValue({ username: 'test', password: null });
    component.loginForm.updateValueAndValidity();

    expect(component.validForm).toBeFalse();
  });

  it('should invoke the method next and complete of the subject', () => {
    spyOn(component.notifier$, 'next');
    spyOn(component.notifier$, 'complete');

    component.ngOnDestroy();

    expect(component.notifier$.next).toHaveBeenCalledWith(true);
    expect(component.notifier$.complete).toHaveBeenCalled();
  });

  it('loginUser should not invoke the loginUser method', () => {
    spyOn(authService, 'loginUser');
    spyOnProperty(component.loginForm, 'valid').and.returnValue(false);

    component.loginUser();

    expect(authService.loginUser).not.toHaveBeenCalled();
  });

  it('loginUser should invoke the loginUser method and navigate to the route', fakeAsync(() => {
    spyOn(authService, 'loginUser').and.returnValue(of(authMock));
    spyOn(router, 'navigate');

    component.loginForm.setValue(credentialsMock);
    component.loginForm.updateValueAndValidity();

    component.loginUser();
    tick();

    expect(authService.loginUser).toHaveBeenCalledWith(credentialsMock);
    expect(router.navigate).toHaveBeenCalledWith(['']);
  }))

  it('loginUser should invoke the loginUser method, error response', fakeAsync(() => {
    const error: HttpErrorResponse = new HttpErrorResponse({
      status: 404, error: {
        errorMessage: 'Error'
      }
    });

    spyOn(authService, 'loginUser').and.returnValue(asyncError(error));
    spyOn(router, 'navigate');

    component.loginForm.setValue(credentialsMock);
    component.loginForm.updateValueAndValidity();

    component.loginUser();
    tick();

    expect(authService.loginUser).toHaveBeenCalledWith(credentialsMock);
    expect(component.errorMessage).toEqual('Error');
  }));

  it('loginUser should invoke the loginUser method, error response without errorMessage', fakeAsync(() => {
    const error: HttpErrorResponse = new HttpErrorResponse({
      status: 404
    });

    spyOn(authService, 'loginUser').and.returnValue(asyncError(error));
    spyOn(router, 'navigate');

    component.loginForm.setValue(credentialsMock);
    component.loginForm.updateValueAndValidity();

    component.loginUser();

    tick();

    expect(authService.loginUser).toHaveBeenCalledWith(credentialsMock);
    expect(component.errorMessage).toEqual(loginGenericErrorMessage);
  }));
});
