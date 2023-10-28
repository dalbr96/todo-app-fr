import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthorizationService } from 'src/app/core/http/services/authorization/authorization.service';
import { Credentials } from 'src/app/core/model/credentials.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Auth } from 'src/app/core/model/auth.model';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { loginGenericErrorMessage } from 'src/app/core/constants/app.constants';
import { LoginForm } from './login.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  loginForm: LoginForm;
  errorMessage: string | null;
  notifier$: Subject<boolean>;

  constructor(private readonly authService: AuthorizationService, private readonly router: Router, private readonly formBuilder: FormBuilder) {
    this.errorMessage = null;
    this.loginForm = new LoginForm(this.formBuilder);
    this.notifier$ = new Subject();
  }

  ngOnDestroy(): void {
    this.notifier$.next(true);
    this.notifier$.complete();
  }

  get validForm() {
    return this.loginForm.valid;
  }

  loginUser() {
    if (this.validForm) {
      this.errorMessage = null;
      const credentials: Credentials = this.loginForm.value;
      this.invokeLogin(credentials);
    }
  }

  private invokeLogin(body: Credentials) {
    this.authService.loginUser(body)
      .pipe(takeUntil(this.notifier$))
      .subscribe(this.manageLoginResponse());
  }

  private manageLoginResponse() {
    return {
      next: this.successResponse(),
      error: this.errorResponse(),
    };
  }

  private successResponse() {
    return (value: Auth) => {
      localStorage.setItem("token", value.token.substring(7));
      this.router.navigate(['']);
    };
  }

  private errorResponse() {
    return (error: HttpErrorResponse) =>
      this.errorMessage = error.error?.errorMessage ? error.error.errorMessage : loginGenericErrorMessage
  }
}
