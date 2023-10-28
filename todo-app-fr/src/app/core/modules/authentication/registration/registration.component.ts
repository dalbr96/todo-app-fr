import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegistrationForm } from './registration.form';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/core/http/services/authorization/authorization.service';
import { Subject, takeUntil } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { signInGenericErrorMessage } from 'src/app/core/constants/app.constants';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnDestroy {

  onDestroy$: Subject<boolean> = new Subject();
  registrationForm: RegistrationForm;
  errorMessage: string = "";

  constructor(readonly formBuilder: FormBuilder, private readonly authService: AuthorizationService, private readonly router: Router) {
    this.registrationForm = new RegistrationForm(formBuilder);
  }


  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  signInUser() {
    const body = this.registrationForm.value;
    this.authService.signInUser(body).pipe(takeUntil(this.onDestroy$)).subscribe(this.manageSignInResponse())
  }

  get validForm() {
    return this.registrationForm.valid;
  }

  private manageSignInResponse() {
    return {
      next: this.successResponse(),
      error: this.errorResponse(),
    };
  }

  private successResponse() {
    return () => {
      this.router.navigate(['authentication/login']);
    };
  }

  private errorResponse() {
    return (error: HttpErrorResponse) =>
      this.errorMessage = error.message ? error.message : signInGenericErrorMessage
  }
}
