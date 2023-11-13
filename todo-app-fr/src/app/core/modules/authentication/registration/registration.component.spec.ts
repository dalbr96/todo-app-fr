import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthorizationService } from 'src/app/core/http/services/authorization/authorization.service';
import { StandardButtonComponent } from 'src/app/shared/standard-button/standard-button.component';
import { TextInputComponent } from 'src/app/shared/text-input/text-input.component';
import { RegistrationComponent } from './registration.component';
import { userMock } from 'src/assets/test/model/user.mock';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { asyncError } from 'src/assets/test/utils/async_error';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let service: AuthorizationService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [HttpClientTestingModule, TextInputComponent, StandardButtonComponent, RouterTestingModule],
      providers: [AuthorizationService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    service = TestBed.inject(AuthorizationService);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnDestroy should invoke the next and complete method of the subject onDestroy$', () => {
    spyOn(component.onDestroy$, 'next');
    spyOn(component.onDestroy$, 'complete');

    component.ngOnDestroy();

    expect(component.onDestroy$.next).toHaveBeenCalled();
    expect(component.onDestroy$.complete).toHaveBeenCalled();
  });

  it('signInUser should invoke the method signInUser of the auth service, and invoke the navigate method of the router service', () => {
    spyOn(service, 'signInUser').and.returnValue(of(userMock));
    spyOn(router, 'navigate');

    const expectedBody = userMock;

    component.registrationForm.setValue(userMock);
    component.registrationForm.updateValueAndValidity();


    component.signInUser();

    expect(service.signInUser).toHaveBeenCalledWith(expectedBody);
    expect(router.navigate).toHaveBeenCalledWith(['authentication/login']);
  })

  it('signInUser should invoke the method signInUser of the auth service, and set the property errorMessage', fakeAsync(() => {

    const error: HttpErrorResponse = new HttpErrorResponse({
      status: 404
    });
    spyOn(service, 'signInUser').and.returnValue(asyncError(error));
    spyOn(router, 'navigate');

    const expectedBody = userMock;

    component.registrationForm.setValue(userMock);
    component.registrationForm.updateValueAndValidity();


    component.signInUser();
    tick();


    expect(service.signInUser).toHaveBeenCalledWith(expectedBody);
    expect(router.navigate).not.toHaveBeenCalled();
    expect(component.errorMessage).toEqual('Http failure response for (unknown url): 404 undefined');
  }))

  it('signInUser should not invoke the method signInUser of the auth service', () => {
    spyOn(service, 'signInUser');
    component.registrationForm.reset();
    component.registrationForm.updateValueAndValidity();

    component.signInUser();

    expect(service.signInUser).not.toHaveBeenCalled();
  })
});
